import React from "react";
import { Link, useNavigate } from "react-router-dom";  // ✅ Correct Link

const Register = () => {
    
const navigate = useNavigate()

const submitHandle =() =>{
        navigate('/')
}
  return (
    <div className="lg:container mx-auto flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-10">
        <h3 className="text-3xl font-bold text-center mb-8 text-[#007580]">
          Create an Account
        </h3>

        <form action="#" onSubmit={submitHandle} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name..."
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#007580]"
          />
          <input
            type="email"
            placeholder="Your Email..."
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#007580]"
          />
          <input
            type="password"
            placeholder="Password..."
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#007580]"
          />
          <input
            type="password"
            placeholder="Confirm Password..."
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#007580]"
          />

          <button
            type="submit"
            className="w-full bg-[#007580] text-white py-4 text-xl rounded-lg hover:bg-[#005f66] transition"
          >
            Register
          </button>
        </form>

        <p className="text-lg text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-[#007580] font-semibold underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
