
import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = use(AuthContext)
   
 
  
    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form)
    const {email , password, ...restFormData} =  Object.fromEntries(formData.entries())
    
    
    createUser(email,password)
    .then(result => {
      console.log(result.user)
     const userProfile = {
      email,
      ...restFormData,
      creationTime: result?.user?.metadata?.creationTime
,
      lastSignInTime: result?.user?.metadata?.lastSignInTime
  ,

    }
      // save database
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userProfile)
      })
      .then(res => res.json())
    .then(data => {
    if (data.insertedId) {
        Swal.fire({
            title: 'Sign Up Successful!',
            text: 'Welcome  🎉 Your account has been created.',
            icon: 'success',
            confirmButtonText: 'Continue'
        });
    }
})
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="min-h-screen bg-[#fbeeee] flex items-center justify-center px-4">
      <div className="bg-[#565050] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            required
          />
          <input
            type="number"
            name="number"
            placeholder="phone number"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Adress"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full bg-[#3A3A3A] text-white"
            required
          />
          <button
            type="submit"
            className="btn bg-[#F4C430] text-black hover:bg-[#e0b020] w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <span className="text-[#F4C430] cursor-pointer">
            <Link to='/signIn'>SignIn</Link></span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;