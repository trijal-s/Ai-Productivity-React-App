import { Play, Pause, RotateCcw } from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function FocusTimerPage() {
  const { pomodoro } = useApp();
  const { timeLeft, isActive, start, pause, reset } = pomodoro;

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;

  return (
    <div className="focus-container">
      <h2 className="focus-title">Focus Timer</h2>

      <div className="focus-time">
        {min}:{String(sec).padStart(2, "0")}
      </div>

      <div className="focus-buttons">
        <button
          onClick={isActive ? pause : start}
          className="btn btn-primary"
        >
          {isActive ? <Pause /> : <Play />}
        </button>

        <button
          onClick={reset}
          className="btn btn-gray"
        >
          <RotateCcw />
        </button>
      </div>
    </div>
  );
}
