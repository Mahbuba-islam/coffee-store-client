import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { use } from 'react';

const SignIn = () => {
  const {signInUser} = use(AuthContext)

 const handleSignIn = (e) => {
    e.preventDefault();
   const form = e.target
   const email = form.email.value
   const password = form.password.value
  //  send firebase
   signInUser(email,password)
   .then(result => {
    console.log(result)
    const signInInfo = {
      email,
      lastSignInTime : result.user.metadata.lastSignInTime
    }
    // send data for update logInTime
    fetch('http://localhost:3000/users/', {
      method: 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(signInInfo)
    })
  .then(res => res.json())
  .then(result => console.log(result))
   })
   .catch(error => {
    console.log(error)
   })
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4">
      <div className="bg-[#2C2C2C] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
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
            Sign In
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