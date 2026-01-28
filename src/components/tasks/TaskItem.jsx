import { useApp } from "../../context/AppContext";

export default function TaskItem({ task }) {
  const { updateTask, deleteTask } = useApp();

  return (
    <div className="task-item">
      <span>{task.title}</span>

      <div>
        <button
          className="btn btn-gray"
          onClick={() => updateTask(task.id, { status: "completed" })}
        >
          ✓
        </button>

        <button
          className="btn btn-danger"
          onClick={() => deleteTask(task.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
