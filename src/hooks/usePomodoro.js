import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const usePomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useLocalStorage("sessions", []);

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setSessions(prev => [
        ...prev,
        {
          type: isBreak ? "break" : "focus",
          duration: isBreak ? 5 : 25,
          date: new Date().toISOString().split("T")[0],
          timestamp: new Date().toISOString()
        }
      ]);

      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak]);

  return {
    timeLeft,
    isActive,
    isBreak,
    sessions,
    start: () => setIsActive(true),
    pause: () => setIsActive(false),
    reset: () => {
      setIsActive(false);
      setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
    },
    switchMode: mode => {
      setIsActive(false);
      setIsBreak(mode === "break");
      setTimeLeft(mode === "break" ? 5 * 60 : 25 * 60);
    }
  };
};
