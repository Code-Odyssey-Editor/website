import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button, Input } from "@nextui-org/react";
import { motion } from 'framer-motion';
import CommonNavbar from "../../components/navbar/common_navbar";


function SignIn() {

  return (
   
    <body className="body ">

      <div className="card">

        < input type="checkbox" id="chk" aria-hidden="true" name="" />
        <div className="content">

          <div className="front">
            <div className="inner">

              <span >Code Odyssey </span>
              <span className="text-black"> Editor</span>

              <h1 className="title">SignIn</h1>
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
              <p className="para">Just some details to get you in.!</p>

              {/* <Image className=""
                width={150}
                alt="NextUI Fruit Image with Zoom"
                src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              /> */}
              <form className="flex flex-col items-center">
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  // placeholder="Enter your Password"
                  variant={"flat"}
                  className="max-w-xs mt-5 overflow-hidden "

                />
                <Input
                  isRequired
                  type="password"
                  label="Password"
                  // placeholder="Enter your Password"
                  className="max-w-xs mt-3 mb-4"
                />
                <div className="checkboxandforgetpassword">
                  <label >
                    <input type="checkbox" /> Remember me
                  </label>

                  <label htmlFor="chk" aria-hidden="true" className="f_password" >
                    Forgot password?
                  </label>
                </div>
                <Button  className="font-extralight text-base mt-4 hover:bg-emerald-500 hover:text-white " >
                  Sign In
                </Button>
              </form>

            </div>

          </div>

          <div className="back">
            <div className="inner">
              <span >Code Odyssey Editor</span>
              <span className="text-black"> Editor</span>
              <h1 className="title2">Reset Password</h1>
              <form className="flex flex-col items-center">
                <Input
                  isRequired
                  type="text"
                  label="Username"
                  // placeholder="Enter your Password"
                  variant={"flat"}
                  className="max-w-xs mt-24 "
                />
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  // placeholder="Enter your Password"
                  variant={"flat"}
                  className="max-w-xs mt-3 mb-4"
                />
                <Button  className="font-extralight text-base mt-3 hover:bg-emerald-500 hover:text-white">
                  Reset Password
                </Button>
                <label htmlFor="chk" aria-hidden="true" className="backtosigninpage" >
                  Back to signIn page 
                </label>
              </form>
            </div>
          </div>
        </section>
      </body>
    </div >
  );
}

export default SignIn;
