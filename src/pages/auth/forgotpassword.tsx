import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

// import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button, Input } from "@nextui-org/react";
import { BiUserCircle } from "react-icons/bi";
import CommonNavbar from "../../components/navbar/common_navbar";

const forgotpassword: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
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

      <body className="darl:bg-black z-10 lg:mt-0 mt-2">
        <section className="flex flex-col items-center justify-center w-full flex-1 px-18 text-center min-h-screen">
          <div className="bg-white rounded-2xl shadow-2xl flex w-1/2 max-w-4xl z-10 dark:bg-slate-950">
            <div className="w-full p-4 lg:scale-100 scale-95">
              {/* Sign in */}
              <div className="text-left font-bold">
                <span className="text-green-500"> Code Odessay</span> Editor
              </div>
              <div className="py-10">
                <h2 className="text-2xl font-bold text-green-500 mb-10">
                  Forgot Password
                </h2>

                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 lg:scale-100 scale-90 dark:bg-slate-900 w-64 p-2 flex items-center mb-3 rounded-full">
                    <BiUserCircle className="mr-2 ml-2"/>
                    <div className="">
                      <Input
                        type="text"
                        label="UserName"
                        variant="underlined"
                        // placeholder="Enter your username"
                        className="outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 lg:scale-100 scale-90 dark:bg-slate-900 w-64 p-2 flex items-center mb-3 rounded-full">
                    <RiLockPasswordLine className="mr-2 ml-2"/>
                    <div className="">
                      <Input
                        type="password"
                        variant="underlined"
                        label="Email"
                        // placeholder="Enter Password"
                        className="outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 lg:scale-100 scale-90 dark:bg-slate-900 w-64 p-2 flex items-center mb-3 rounded-full">
                    <RiLockPasswordLine className="mr-2 ml-2" />
                    <div className="">
                      <Input
                        type="password"
                        variant="underlined"
                        label="Password"
                        // placeholder="Confirm Password"
                        className="outline-none "
                      />
                    </div>
                  </div>

                  <Button className=" mb-2 border-2 border-green-500 rounded-full inline-block text-green-500 hover:bg-green-500 hover:text-white hover:border-white">
                    Forgot Password
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden w-8/12 bg-green-600 dark:bg-green-700 md:flex flex-col justify-center items-center text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              {/* Sign up */}
              <h2 className="lg:text-3xl text-xl font-bold mb-2 overflow-hidden ">
                Hello, Friend!
              </h2>
              <image href="logo" />
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-5 lg:text-base text-xs">
                Fill up the information to start journey with us
              </p>
              <Link to="/website/sign-up">
              <Button
                color="success"
                className="border-2 border-white rounded-full lg:scale-100 scale-80 inline-block text-white hover:bg-slate-50  hover:text-green-500 hover:border-green-500"
                >
                Sign Up
              </Button>
                  </Link>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};
export default forgotpassword;