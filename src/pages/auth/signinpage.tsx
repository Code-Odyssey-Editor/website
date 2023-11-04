import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "@nextui-org/input";

const SignIn: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100/80">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-3xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign In Section */}
          <div className="w-full lg:w-3/5 p-5">
            <div className="text-left font-bold font-serif">
              <span className="text-blue-500">Code Odyssey</span> Editor
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Sign In
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <Link
                  to="#"
                  className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                >
                  <FaGoogle className="text-sm" />
                </Link>
                <Link
                  to="#"
                  className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                >
                  <FaGithub className="text-sm" />
                </Link>
                <Link
                  to="#"
                  className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                >
                  <FaFacebook className="text-sm" />
                </Link>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  // placeholder="Enter your Password"
                  className="max-w-xs mt-5"
                  variant={"flat"}
                />
                <Input
                  isRequired
                  type="password"
                  label="Password"
                  // placeholder="Enter your Password"
                  className="max-w-xs mt-3 mb-4"
                  variant={"flat"}
                />
                <div className="flex w-64 mb-5">
                  <label className="text-sm text-gray-400 cursor-pointer m-2 justify-start text-start">
                    <input type="checkbox" className="mr-1" /> Remember me
                  </label>
                  <Link
                    to="/auth/forgotpassword"
                    className="text-sm ml-auto text-gray-900/60 font-bold m-2 justify-end text-end"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Link to="sign-in">
                  <button className="border-2 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white transition ease-in-out duration-300">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sign Up Section */}
          <div className="hidden lg:block w-2/5 bg-blue-500/80 text-white rounded-tr-3xl rounded-br-3xl py-48 px-16">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
              Fill up personal information and start journey with us.
            </p>
            <Link to="sign-up">
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500 transition ease-in-out duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
