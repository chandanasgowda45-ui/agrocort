import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoanPage from "./LoanPage";
import EducationPage from "./EducationPage";
import SellCropPage from "./SellCropPage";

function App() {
  return (
    <Router>
      <nav style={{ padding: 20, background: "#e0ffe0" }}>
        <Link to="/" style={{ margin: 10 }}>Dashboard</Link>
        <Link to="/loan" style={{ margin: 10 }}>Loan</Link>
        <Link to="/education" style={{ margin: 10 }}>Education</Link>
        <Link to="/sell" style={{ margin: 10 }}>Sell Crop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/sell" element={<SellCropPage />} />
      </Routes>
    </Router>
  );
}

export default App;
