import React, { useEffect, useState } from 'react'
import Header from './commen/Header'
import '../assets css/Home.scss'

function Job() {
   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example API: JSONPlaceholder (Fake REST API)
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;


  return (
    <div className='Ho-body'>
      <div className='home-header'>
                <Header/>
        </div>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">API Data</h1>
      <ul className="space-y-2">
        {data.slice(0, 10).map((item) => (
          <li key={item.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
      <h1>Job</h1>
    </div>
  )
}

export default Job
