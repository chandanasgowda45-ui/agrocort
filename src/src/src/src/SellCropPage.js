import React from "react";
import { Link } from "react-router-dom";

export default function SellCropPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Sell Crop Page</h1>
      <img src="/images/sell.jpg" alt="Sell Crops" width={250} />
      <p>Post your crops for sale and connect with buyers.</p>
      <Link to="/"><button>Back to Dashboard</button></Link>
    </div>
  );
}
