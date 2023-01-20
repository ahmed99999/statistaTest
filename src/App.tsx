import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import StatisticsPage from "./pages/StatisticsPage";
import StatisticDetailPage from "./pages/StatisticDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="statistics" element={<StatisticsPage />} />
        <Route
          path="statistics/:statisticId"
          element={<StatisticDetailPage />}
        />
        <Route path="*" element={<Navigate to="/statistics" replace />} />
      </Routes>
    </div>
  );
}

export default App;
