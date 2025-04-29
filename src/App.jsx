// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import withLoadingIndicator from "../src/components/hoc/withLoadingIndicator";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Layout from "./Layout";
import { useState, useEffect } from "react";

const LayoutWithLoading = withLoadingIndicator(Layout);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading 
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithLoading loading={loading} />}>
          <Route index element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
