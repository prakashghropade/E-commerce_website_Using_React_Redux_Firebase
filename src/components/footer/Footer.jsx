import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer className="text-gray-600 body-font bg-blue-600">
                {/* main  */}
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo  */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">Pg-shop</span>
                    </a>
                    {/* para  */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 pg-shop —
                        <Link
                        to={'/'}
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @pgshop
                        </Link>
                    </p>
                    
                    {/* media icon  */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* facebook 
                        <a className="text-gray-100 cursor-pointer">
                        <FaFacebookF />
                        </a> */}

                        {/* git  */}
                        <a className="ml-3 text-gray-100 cursor-pointer">
                        <Link to='https://github.com/prakashghropade'> <FaGithub />   </Link> 
                        </a>

                        {/* instagram  */}
                        {/* <a className="ml-3 text-gray-100 cursor-pointer">
                        <FaInstagram />
                        </a> */}

                        {/* linkedIn  */}
                        <a className="ml-3 text-gray-100 cursor-pointer">
                        <Link to='https://www.linkedin.com/in/prakash-ghorpade-2b4921236/'> <FaLinkedinIn /> </Link> 
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;