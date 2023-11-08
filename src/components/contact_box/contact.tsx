import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function contact() {
    return (
        <body className="flex items-center justify-center h-screen ">
            <div className="relative w-2/3 h-screen flex justify-center items-center  ">
                <div className="w-full h-550 max-w-820   shadow overflow-hidden grid grid-cols-2 z-10 border border-gray-600/30 w-1/2 rounded-3xl">
                    <div className="bg-emerald-400	">
                        <h4 className="text-black text-3xl relative  left-20 pt-10">Contact Us</h4>
                        <form className="px-20 h-full w-full overflow-hidden" action="">
                            <div className="relative h-16 w-full mt-6">
                                <Input
                                    type="text"
                                    label="Name"
                                    defaultValue=""
                                    className="w-full h-full pl-4 "
                                />
                            </div>
                            <div className="input_box">
                                <Input

                                    type="email"

                                    label="Email"
                                    defaultValue=""
                                    className="w-full h-full pl-4 mt-3"
                                />
                            </div>
                            <div className="input_box">
                                <Input

                                    type="text"
                                    label="Subject"
                                    defaultValue=""
                                    className="w-full h-full pl-4 mt-4"
                                />
                            </div>
                            <div className="input_box">
                                <Input

                                    type="text"
                                    label="Message"
                                    defaultValue=""
                                    className="w-full h-full pl-4 mt-4"
                                />
                            </div>
                            <div className="grid grid-cols-2  pl-4 w-100 ">
                                <button className="btn_upload">

                                    <input type="file" placeholder="" />
                                </button>
                                <Button color="primary" className="shadow-lg shadow-blue-500/50  inline-block hover:bg-sky-700  mt-24 cursor-pointer transition duration-300 ease-in-out">
                                    Submit
                                </Button>
                            </div>

                        </form>
                    </div>

                    <div className="bg-black">
                        <div className="text-white pl-20 pt-10 text-3xl">Let's work together</div>
                        <img src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" className="border-10 p-15 pt-4 rounded-br-full"/>
                        <div className="social_links">
                            <span className="text-center pl-36"> Connect with us</span>


                            <div className="flex justify-center my-2 mt-16 mb-4">
                                <Link
                                    to="#"
                                    className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                                >
                                    < AiFillTwitterCircle />
                                </Link>
                                <Link
                                    to="#"
                                    className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                                >
                                    <FaInstagramSquare />
                                </Link>
                                <Link
                                    to="#"
                                    className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                                >
                                    <FaFacebook />
                                </Link>
                                <Link
                                    to="#"
                                    className="border-2 border-gray-200 rounded-full py-2 px-4 mx-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition ease-in-out duration-300"
                                >
                                    <AiFillLinkedin />
                                </Link>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </body>
    );
}
