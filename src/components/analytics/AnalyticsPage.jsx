import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useApp } from "../../context/AppContext";

export default function AnalyticsPage() {
  const { pomodoro } = useApp();

  const data = pomodoro.sessions.map((s, i) => ({
    day: i + 1,
    minutes: s.duration
  }));

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Analytics</h2>

      <div className="analytics-card">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line dataKey="minutes" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
