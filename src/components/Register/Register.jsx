import React from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-[40px] font-semibold font-serif leading-tight mt-12 text-center">
              Sign Up
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name
                  id
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autoComplete
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">New Username</label>
                <input
                  type="text"
                  name
                  id
                  placeholder="Enter New Username"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autoComplete
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name
                  id
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
        focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name
                  id
                  placeholder="Enter Confirm Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
        focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full block bg-cyan-500 hover:bg-cyan-400 focus:bg-cyan-400 text-white font-semibold rounded-lg
      px-4 py-3 mt-8"
              >
                Login
              </button>
            </form>
            <p className="mt-8">
              You have a account ?{" "}
              <NavLink
                to="/login"
                className="text-cyan-500 hover:text-cyan-700 font-semibold"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://img.freepik.com/premium-photo/chef-preparing-food-kitchen-restaurant_777271-3987.jpg"
            alt
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Register;
