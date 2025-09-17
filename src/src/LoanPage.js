import React from "react";
import { Link } from "react-router-dom";

export default function LoanPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Loan Page</h1>
      <img src="/images/loan.jpg" alt="Loan" width={250} />
      <p>Apply for a new agriculture loan or view your loan status here.</p>
      <Link to="/"><button>Back to Dashboard</button></Link>
    </div>
  );
}
