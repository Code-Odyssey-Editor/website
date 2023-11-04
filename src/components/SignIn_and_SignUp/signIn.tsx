import React from "react";
import { Image, Input, Button } from "@nextui-org/react";


const SignIn: React.FC = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 lg:flex-row flex-col h-full">

        <div className="rounded-tl-3xl bg-gradient-to-r from-gray-700 via-white-500 to-slate-800 w-full lg:w-1/2 p-6">
          <div className="">
            <h2 className=" text-white font-bold text-2xl">SignIn</h2>
            <p className=" text-white text-xs mt-4">Just some details to get you in!</p>
            <form>
              <Input
                type="text"
                id="name"
                label="Username"
                defaultValue=""
                className="max-w-[290px] mt-5 "
              />

              <Input
                type="email"
                id="email"
                label="Email"
                defaultValue=""
                className="max-w-[290px] mt-5 "
              />

              <Input
                type="password"
                id="password"
                label="Password"
                defaultValue=""
                className="max-w-[290px] mt-5 "
              />

              <Input
                type="password"
                id="password"
                label="Confirm Password"
                defaultValue=""
                className="max-w-[290px] mt-5 "
              />

              <div className="pl-28">
                <Button className="max-w-[290px] mt-6 max-h-[30px]" color="primary">
                  Sign Up
                </Button>
              </div>

              <div className="text-xs mt-3 text-white">
                <p>Already have an account? Sign in</p>
              </div>

              <div className="mx-auto w-1/4 border-b border-gray-500 border-2 mt-3"></div>
              
            </form>
          </div>
        </div>

        <div className="w-1/2  mt-7 pr-1 pl-2 ">
          <Image
            isZoomed
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
            className="object-cover w-full h-full "
          />
        </div>

      </div>
    </div>
  );
};

export default SignIn;
