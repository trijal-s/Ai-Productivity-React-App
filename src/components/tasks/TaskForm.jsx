import { useState } from "react";
import { useApp } from "../../context/AppContext";

export default function TaskForm({ onClose }) {
  const { addTask } = useApp();
  const [title, setTitle] = useState("");

  const submit = e => {
    e.preventDefault();
    addTask({ title });
    onClose();
  };

  return (
    <div className="modal">
      <form className="modal-box" onSubmit={submit}>
        <h3>New Task</h3>

        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task name"
        />

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
