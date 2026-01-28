import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { useApp } from "../../context/AppContext";

export default function TasksPage() {
  const { tasks } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>Tasks</h2>

      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Add Task
      </button>

      <div className="card">
        {tasks.map(t => (
          <TaskItem key={t.id} task={t} />
        ))}
      </div>

      {open && <TaskForm onClose={() => setOpen(false)} />}
    </>
  );
}
