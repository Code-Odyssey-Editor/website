import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button, Input } from "@nextui-org/react";
import { motion } from 'framer-motion';
import CommonNavbar from "../../components/navbar/common_navbar";


function SignIn() {

  return (
    <div className="fixed inset-0 z-0">
      {[...Array(100)].map((_, index) => (
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
            scale: Math.random() * 0.5 + 0.2,
            rotate: Math.random() * 360,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            transition: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 3 + 1,
              ease: 'linear',
            },
          }}
          className="absolute bg-white w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
        />
      ))}
      <body className="bg-black">
              {/* Common Navbar */}
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


        <section className="flex flex-col items-center justify-center w-full flex-1 px-18 text-center min-h-screen">

          <div className="bg-white rounded-2xl shadow-2xl flex w-1/2 max-w-4xl">
            <div className="w-3/5 p-4">{/* Sign in */}
              <div className="text-left font-bold">
                <span className="text-green-500"> Code Odessay</span> Editor
              </div>

              <div className="py-10">
                <h2 className="text-2xl font-bold text-green-500 mb-2">Sign in</h2>
                <p className="mb-2 text-sm">Just some details to get you in.!</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                    <MdEmail className="mr-2 ml-2" />
                    <div className="">
                      <Input type="email" placeholder="Enter your email" className="outline-none" />
                    </div>
                  </div>


                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                    <RiLockPasswordLine className="mr-2 ml-2" />
                    <div className="">
                      <Input type="password" placeholder="Enter Password" className="outline-none " />
                    </div>
                  </div>
                  <div className="flex justify-between w-64 mb-5 text-sm">
                    <label><input type="checkbox" name="remember" className="mr-1" /> Remember me</label>
                    <Link to="/forgot_p">
                      <p>Forgot Password?</p>
                    </Link>

                  </div>
                  <Button className=" mb-2 border-2 border-green-500 rounded-full inline-block text-green-500 hover:bg-green-500  hover:text-white hover:border-white">
                   Signin
                  </Button>

                </div >
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

            <div className="w-1/2 bg-green-600  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">{/* Sign up */}
              <h2 className="text-3xl font-bold mb-2 overflow-hidden ">Hello, Friend!</h2>
              <image href="logo" />
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10 "> Fill up the information to start journey with us</p>
              <Button color="success" className="border-2 border-white rounded-full inline-block text-white hover:bg-slate-50  hover:text-green-500 hover:border-green-500">
                Signup
              </Button>
            </div>
          </div>
        </section>
      </body>
    </div >
  );
};

export default SignIn;