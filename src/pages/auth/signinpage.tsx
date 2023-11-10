import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

const SignIn: React.FC = () => {
  return (
    <body className="body flex items-center justify-center h-[100vh] bg-[#f2f2f2] transition-filter filter brightness-80 hover:brightness-100 cursor-pointer">
      <div className="card h-[550px] w-[500px] perspective-64">
        <div className="content w-full h-full transform-style preserve-3d shadow-md transition-transform duration-1000 ease-in-out rounded-lg">
          <div className="front absolute top-0 left-0 w-full h-full bg-white backface-hidden transform-style preserve-3d perspective-1500 border-tl-25 border-bl-25">
            <div className="inner h-full p-[0.5rem] transform translate-z-80 scale-100">
              <span>Code Odyssey </span>
              <span className="text-black">Editor</span>

              <h1 className="title relative top-18 left-14 pl-36 text-2xl font-bold text-emerald-500">SignIn</h1>
              <div className="flex justify-center my-2 mt-20">
                <Link
                  to="#"
                  className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                >
                  <FaGoogle />
                </Link>
                <Link
                  to="#"
                  className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  to="#"
                  className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
              <p className="para text-sm p-4 md:p-15 text-justify leading-6">Just some details to get you in.!</p>

              <form className="flex flex-col items-center">
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  variant="flat"
                  className="max-w-xs mt-5 overflow-hidden"
                />
                <Input
                  isRequired
                  type="password"
                  label="Password"
                  className="max-w-xs mt-3 mb-4"
                />
                <div className="checkboxandforgetpassword flex items-center">
                  <label className="mr-32 ml-24">
                    <input type="checkbox" /> Remember me
                  </label>

                  <label htmlFor="chk" aria-hidden="true" className="f_password cursor-pointor">
                    Forgot password?
                  </label>
                  
                </div>
                <Button className="font-extralight text-base mt-4 hover:bg-emerald-500 hover:text-white">
                  Sign In
                </Button>
              </form>
            </div>
          </div>

          <div className="back absolute top-0 left-0 w-full h-full bg-white backface-hidden transform-style preserve-3d perspective-1500 border-tl-25 border-bl-25">
            <div className="inner h-full p-[0.5em] transform translate-z-80 scale-100">
              <span>Code Odyssey Editor</span>
              <span className="text-black"> Editor</span>
              <h1 className="title2 relative top-[70px] pl-[30%] text-3xl text-emerald-500 font-bold">Reset Password</h1>
              <form className="flex flex-col items-center">
                <Input
                  isRequired
                  type="text"
                  label="Username"
                  variant="flat"
                  className="max-w-xs mt-24"
                />
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  variant="flat"
                  className="max-w-xs mt-3 mb-4"
                />
                <Button className="font-extralight text-base mt-3 hover:bg-emerald-500 hover:text-white">
                  Reset Password
                </Button>
                <label htmlFor="chk" aria-hidden="true" className="backtosigninpage mt-5 mr-8 ml-40 cursor-pointer">
                  Back to signIn page
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebox bg-emerald-500 p-5 h-[550px] w-[500px] rounded-tr-25 rounded-br-25 shadow-md">
        <div className="title3 relative top-47 pl-40 text-2xl font-bold text-white">
          <h2>Hello, Friend!</h2>
        </div>

        <p className="titledetail relative top-49 text-white font-bold pl-10">
          Fill up information and start your journey with us.
        </p>
        <Link to="sign-up" className="pl-36">
          <Button className="font-extralight mt-56 text-base hover:bg-white hover:text-green-500">
            Sign Up
          </Button>
        </Link>
      </div>
    </body>
  );
};

export default SignIn;
