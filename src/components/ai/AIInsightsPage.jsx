import { Lightbulb } from "lucide-react";

export default function AIInsightsPage() {
  return (
    <div className="ai-container">
      <h2 className="ai-title">
        <Lightbulb className="ai-icon" />
        AI Insights
      </h2>

      <div className="ai-box">
        You are most productive in the morning. Try deep work before noon ☀️
      </div>
    </div>
  );
}
