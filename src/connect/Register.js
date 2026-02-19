import React, { useEffect, useState } from 'react'
import Header from './commen/Header'
import '../assets css/Home.scss'

function Register() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch API Data
  useEffect(() => {
    fetch("http://localhost:8080/Compound")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading data...
        </p>
      </div>
    );
  }
  return (
    <div className='Ho-body'>
      <div className='home-header'>
                <Header/>
        </div>
      <h1>Register</h1>
       <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          📋 Compound User Details
        </h1>

        <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Number</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="py-3 px-4 text-gray-800">{user.id}</td>
                  <td className="py-3 px-4 font-medium text-blue-700">
                    {user.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.number}</td>
                  <td className="py-3 px-4 text-gray-600">{user.mail}</td>
                  <td className="py-3 px-4 text-gray-600">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Compound Data Viewer
        </p>
      </div>
    </div>
    </div>
  )
}

export default Register
