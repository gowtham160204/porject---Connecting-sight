import React, { useEffect, useState } from "react";
import "../assets css/Data.scss";

function Dataalign() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/Compound")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>📦 Compound Data</h1>

      {loading && <p className="loading">Loading data...</p>}
      {error && <p className="error">❌ {error}</p>}

      <div className="card-grid">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Number:</strong> {item.number}</p>
            <p><strong>Email:</strong> {item.mail}</p>
            <span className="tag">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dataalign;
