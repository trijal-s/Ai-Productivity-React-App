import {
  Home,
  CheckSquare,
  Clock,
  BarChart2,
  Lightbulb,
  Sun,
  Moon
} from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function Sidebar({ page, setPage }) {
  const items = [
    { id: "dashboard", label: "Dashboard" },
    { id: "tasks", label: "Tasks" },
    { id: "focus", label: "Focus Timer" },
    { id: "analytics", label: "Analytics" },
    { id: "ai", label: "AI Insights" }
  ];

  return (
    <aside className="sidebar">
      <h1>ProductivityAI</h1>

      {items.map(i => (
        <button
          key={i.id}
          className={page === i.id ? "active" : ""}
          onClick={() => setPage(i.id)}
        >
          {i.label}
        </button>
      ))}
    </aside>
  );
}

