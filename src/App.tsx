import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Statistics from "./pages/Statistics";
import Statistic from "./pages/StatisticDetail";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="statistics" element={<Statistics />} />
          <Route path="statistics/:statisticId" element={<Statistic />} />
          <Route path="*" element={<Navigate to="/statistics" replace />} />
        </Routes>
      </div>
  );
}

export default App;
