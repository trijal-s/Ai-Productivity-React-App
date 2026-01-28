import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePomodoro } from "../hooks/usePomodoro";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const pomodoro = usePomodoro();

  const addTask = task => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        status: "pending",
        createdAt: new Date().toISOString(),
        ...task
      }
    ]);
  };

  const updateTask = (id, updates) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const deleteTask = id => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode(p => !p),
        tasks,
        addTask,
        updateTask,
        deleteTask,
        pomodoro
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
