import { useApp } from "../../context/AppContext";

export default function DashboardPage() {
  const { tasks, pomodoro } = useApp();

  return (
    <>
      <h2>Dashboard</h2>

      <div className="card">
        Total Tasks: {tasks.length}
      </div>

      <div className="card">
        Focus Sessions: {pomodoro.sessions.length}
      </div>
    </>
  );
}
