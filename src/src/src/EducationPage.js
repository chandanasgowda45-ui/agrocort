import React from "react";
import { Link } from "react-router-dom";

export default function EducationPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Education Page</h1>
      <img src="/images/education.jpg" alt="Education" width={250} />
      <p>Find resources, tips, and guides for improving your farming techniques.</p>
      <Link to="/"><button>Back to Dashboard</button></Link>
    </div>
  );
}
