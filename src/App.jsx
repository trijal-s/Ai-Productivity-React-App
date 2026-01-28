import { useState } from "react";
import { AppProvider } from "./context/AppContext";

import Sidebar from "./components/layout/Sidebar";
import DashboardPage from "./components/dashboard/DashboardPage";
import TasksPage from "./components/tasks/TasksPage";
import FocusTimerPage from "./components/focus/FocusTimerPage";
import AnalyticsPage from "./components/analytics/AnalyticsPage";
import AIInsightsPage from "./components/ai/AIInsightsPage";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const pages = {
    dashboard: <DashboardPage />,
    tasks: <TasksPage />,
    focus: <FocusTimerPage />,
    analytics: <AnalyticsPage />,
    ai: <AIInsightsPage />
  };

  return (
    <AppProvider>
      <div className="app">
        <Sidebar page={page} setPage={setPage} />
        <main className="main">{pages[page]}</main>
      </div>
    </AppProvider>
  );
}

// export default function App() {
//   return (
//     <div style={{ padding: 40, fontSize: 30 }}>
//       ✅ React is working perfectly
//     </div>
//   );
// }