import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Agrocort Dashboard</h1>
      <img src="/images/dashboard.jpg" alt="Dashboard" width={250} />
      <div style={{ marginTop: 30 }}>
        <Link to="/loan"><button>Go to Loan Page</button></Link>
        <Link to="/education"><button>Go to Education Page</button></Link>
        <Link to="/sell"><button>Go to Sell Crop Page</button></Link>
      </div>
    </div>
  );
}
