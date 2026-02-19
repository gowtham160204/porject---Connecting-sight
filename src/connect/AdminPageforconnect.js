import React, { useEffect, useState } from "react";
import Header from './commen/Header'
import '../assets css/Aminpage.scss'

const API = "http://localhost:8080/Compound";
function AdminPageforconnect(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    number: "",
    mail: "",
    password: ""
  });

  const [editId, setEditId] = useState(null);

  // 🔹 GET ALL
  const fetchData = () => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 ADD or UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = editId
      ? `${API}/update/${editId}`
      : `${API}/add`;

    const method = editId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(() => {
        fetchData();
        setForm({ name: "", number: "", mail: "", password: "" });
        setEditId(null);
      })
      .catch(() => setError("Operation failed"));
  };

  // 🔹 DELETE
  const handleDelete = (id) => {
    fetch(`${API}/delete/${id}`, { method: "DELETE" })
      .then(fetchData)
      .catch(() => setError("Delete failed"));
  };

  // 🔹 EDIT
  const handleEdit = (item) => {
    setForm({
      name: item.name,
      number: item.number,
      mail: item.mail,
      password: item.password
    });
    setEditId(item.id);
  };

  return (
    <div className='ho-body'>
      <br></br>
      <div className='home-header'>
         <Header/>
        </div>
        
        <h1> {props.name}</h1>
        <table>
          <thead>
            
          </thead>
        </table>

        <div className="admin-container">
      <h1>🛠 Admin Panel</h1>

      {/* FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="number" placeholder="Phone" value={form.number} onChange={handleChange} required />
        <input name="mail" placeholder="Email" value={form.mail} onChange={handleChange} required />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        
        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* DATA LIST */}
      <div className="admin-grid">
        {data.map((item) => (
          <div className="admin-card" key={item.id}>
            <h3>{item.name}</h3>
            <p><b>ID:</b> {item.id}</p>
            <p><b>📞</b> {item.number}</p>
            <p><b>📧</b> {item.mail}</p>

            <div className="btn-group">
              <button className="edit" onClick={() => handleEdit(item)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    </div>
  )
}

export default AdminPageforconnect
