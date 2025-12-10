import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status == 200) {
        console.log(data.message || 'Account verified');
         localStorage.setItem('name', data.user.name);
        localStorage.setItem('email', data.user.email);
        navigate("/dashboard")
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  };

  return (


    <div className='flex justify-center my-10'>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md ">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>

        <form onSubmit={handleSubmit}>


          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required autoComplete="true" />
          </div>



          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ">
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have account? <Link to="/" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login