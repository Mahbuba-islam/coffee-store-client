
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LogIn Data:', formData);
    // Add Firebase login logic here
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4">
      <div className="bg-[#2C2C2C] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn bg-[#F4C430] text-black hover:bg-[#e0b020] w-full"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account? <span className="text-[#F4C430] cursor-pointer">
            <Link to='/signUp'>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;