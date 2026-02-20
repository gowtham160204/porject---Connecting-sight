import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from './commen/Header'
import '../assets css/Login.scss'
import { ToastContainer, toast } from 'react-toastify';

const ADMIN = {
  name: "add",
  mail: "add",
  number: "222",
  password: "Admin26",
};

function Login() {
    const notify = () => toast.success('Login');
    const [form, setForm] = useState({
    name: "",
    mail: "",
    number: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Admin Login (hardcoded)
    if (
      form.name === ADMIN.name &&
      form.mail === ADMIN.mail &&
      form.number === ADMIN.number &&
      form.password === ADMIN.password
    ) {
      navigate("/Adminfor");
      return;
    }

    // ✅ Normal User Login (no auth check, only insert allowed)
    if (form.name && form.mail && form.number && form.password) {
      navigate("/home", { state: form });
    } else {
      setError("Please fill all fields");
    }
  };
  return (
    <div className=''>
    {/* //   Login
    //   <Link to='home'> home</Link>

    //   <Link to='/adminfor'>admin</Link>
    //   <button onClick={notify}> red</button> */}



 <div className="login-container">
      <div className="login-card">
        <h1>🔐 Login</h1>
        <p>Admin or User Login</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="mail" placeholder="Email" onChange={handleChange} />
          <input name="number" placeholder="Number" onChange={handleChange} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>

        <p className="hint">
          Admin Login → name:add | mail:add | number:222 | password:Admin26
        </p>
      </div>
    </div>
      <ToastContainer 
              position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  );
}

export default Login
