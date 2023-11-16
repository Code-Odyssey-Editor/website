// import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import CommonNavbar from "../../components/navbar/common_navbar";
// import forgotpassword from "./forgotpassword";

function SignIn() {
  return (
    <div className="relative inset-0 z-10">
      <div className="z-0">
        {[...Array(80)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: Math.random() * 0.5 + 0.2,
              rotate: Math.random() * 360,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              opacity: 1,
              scale: Math.random() * 0.7 + 0.4,
              rotate: Math.random() * 360,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 3 + 1,
                ease: "linear",
              },
            }}
            className="absolute dark:bg-white bg-black w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        <CommonNavbar />
      </motion.div>

      <body className="dark:bg-black">
        <section className="flex flex-col items-center justify-center w-full flex-1 px-18 text-center min-h-screen">
          <div className="bg-white rounded-2xl shadow-2xl flex w-4/6 max-w-4xl z-10 dark:bg-slate-950">
            <div className="hidden md:flex flex-col justify-center items-center w-full bg-green-600 dark:bg-green-700  text-white rounded-l-2xl py-36 px-12">
              {/* Sign up */}
              <h2 className="text-3xl font-bold mb-2 overflow-hidden ">
                Hello, Friend!
              </h2>
              <h2 className="text-xl font-bold mb-2 overflow-hidden ">
                WELCOME
              </h2>
              <image href="logo" />
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-5">
                Fill up the information to start journey with us
              </p>
              <Link to="/website/sign-in">
                <Button
                  color="success"
                  className="border-2 border-white rounded-full inline-block text-white hover:bg-slate-50 hover:text-green-500 hover:border-green-500"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            <div className="w-full p-4">
              {/* Sign in */}
              <div className="text-left font-bold">
                Welcome to <span className="text-green-600">Code Odessay</span>{" "}
                Editor
              </div>

              <div className="py-10">
                <h2 className="text-2xl font-bold text-green-500 mb-2">
                  Sign up
                </h2>
                <p className="mb-2 text-sm">
                  Just some details to get you in.!
                </p>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gray-100 dark:bg-slate-900 w-64 p-2 flex items-center mb-1 rounded-full">
                    <MdEmail className="mr-2 ml-2" />
                    <div className="">
                      <Input
                        type="email"
                        variant="underlined"
                        label="Email"
                        placeholder="Enter your email"
                        className="outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-slate-900 w-64 p-2 flex items-center mb-1 rounded-full">
                    <RiLockPasswordLine className="mr-2 ml-2" />
                    <div className="">
                      <Input
                        type="password"
                        variant="underlined"
                        label="Password"
                        placeholder="Enter Password"
                        className="outline-none "
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-slate-900 w-64 p-2 flex items-center mb-1 rounded-full">
                    <RiLockPasswordLine className="mr-2 ml-2" />
                    <div className="">
                      <Input
                        type="password"
                        variant="underlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        className="outline-none "
                      />
                    </div>
                  </div>

                  <label className="m-1">
                    <input type="checkbox" name="remember" className="" />{" "}
                    Remember me
                  </label>
                  <Button className=" mb-2 border-2 border-green-500 rounded-full inline-block text-green-500 hover:bg-green-500  hover:text-white hover:border-white">
                    Sign Up
                  </Button>
                </div>
                <div className="border-2 w-60 border-green-500 inline-block mb-2"></div>
                <div className="flex justify-center ">
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
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default SignIn;
