import React from "react";
import { Image, Input, Button, Checkbox, Link } from "@nextui-org/react";

const Signup: React.FC = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 lg:flex-row flex-col h-full">
        <div className="w-1/2 mt-5 pr-1 pl-2 ">
          <Image
            isZoomed
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="rounded-tl-3xl bg-gradient-to-r from-gray-700 via-white-500 to-slate-800 w-full lg:w-1/2 p-6">
          <div className="">
            <h2 className="text-white font-bold text-2xl">Welcome</h2>
            <p className="text-white text-xs mt-4">
              We are glad to see you back with us
            </p>
            <form>
              <Input
                type="email"
                id="email"
                label="Email"
                defaultValue=""
                className="max-w-[290px] mt-5"
              />

              <Input
                type="password"
                id="password"
                label="Password"
                defaultValue=""
                className="max-w-[290px] mt-5"
              />

              <div className="flex items-center mt-6">
                <Checkbox defaultSelected>Remember me</Checkbox>
                <Link color="primary" href="/forgot-password" className="ml-6">
                  Forgot Password?
                </Link>
              </div>

              <div className="pl-28">
                <Button className="max-w-[290px] mt-6 max-h-[30px]" color="primary">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

