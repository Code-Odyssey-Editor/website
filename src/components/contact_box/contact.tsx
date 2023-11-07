import "./contact.css"
import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function contact() {
    return (
        <body className="body_contact">
            <div className="con">
                <div className="i">
                    <div className="contact">
                        <h4 className="third_text">Contact Us</h4>
                        <form className="form" action="">
                            <div className="input_box">
                                <Input

                                    type="text"
                                    label="Name"
                                    defaultValue=""
                                    className="input"
                                />
                            </div>
                            <div className="input_box">
                                <Input

                                    type="email"

                                    label="Email"
                                    defaultValue=""
                                    className="input"
                                />
                            </div>
                            <div className="input_box">
                                <Input

                                    type="text"
                                    label="Subject"
                                    defaultValue=""
                                    className="input"
                                />
                            </div>
                            <div className="input_box">
                                <Input

                                    type="text"
                                    label="Message"
                                    defaultValue=""
                                    className="input"
                                />
                            </div>
                            <div className="contact_button w-100">
                                <button className="btn_upload">

                                    <input type="file" placeholder="" />
                                </button>
                                <Button color="primary" className="btn">
                                    Submit
                                </Button>
                            </div>

                        </form>
                    </div>

                    <div className="submit">
                        <div className="first_text">Let's work together</div>
                        <img src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" className="imag" />
                        <div className="social_links">
                            <span className="second_text"> Connect with us</span>


                            <div className="flex justify-center my-2 mt-20">
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
