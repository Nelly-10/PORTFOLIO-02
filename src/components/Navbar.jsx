import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <div className="fixed w-full h-[80px] flex justify-between item-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </div>

      {/* menu */}

      <ul className="hidden px-6 py-3 md:flex justify-between item-center">
        <li className="text-2xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      {/* <div onClick={handleClick} className="md:hidden z-10 px-6 py-3 ">
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div> */}

      <div className="text-3xl md:hidden z-10 px-6 py-3" onClick={() => setOpen(!open)}>
            {
              open ?  <FaTimes size={30} /> : <FaBars size={30} />
            }
      </div>

      {/* mobile menu */}
      <ul
        // className={
        //   nav
        //     ? "hidden  left-[-100%]"
        //     : `absolute duration-500 left-0 
        //        w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center`
        // }
        className={`
        md:hidden bg-[#0a192f] fixed w-full h-screen top-0 flex flex-col justify-center items-center
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
      >
        <li className="py-6 text-4xl"><a href="home">Home</a></li>
        <li className="py-6 text-4xl"><a href="about">About</a></li>
        <li className="py-6 text-4xl"><a href="skills">Skills</a></li>
        <li className="py-6 text-4xl"><a href="work">Work</a></li>
        <li className="py-6 text-4xl"><a href="contact">Contact</a></li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center    w-full text-gray-300"
              href="https://www.linkedin.com/in/odumah-nelson-509a2a239"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center    w-full text-gray-300"
              href="https://github.com/Nelly-10"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            {/* <a
              className="flex justify-between items-center    w-full text-gray-300"
              href="contact"
            >
              Email <HiOutlineMail size={30} />
            </a> */}
            <Link
              className="flex justify-between items-center    w-full text-gray-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            {/* <a
              className="flex justify-between items-center    w-full text-gray-300"
              href="/"
            >
              Contact <BsFillPersonLinesFill size={30} />{" "}
            </a> */}
            <Link
              className="flex justify-between items-center    w-full text-gray-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


// const [open, setOpen] = useState(false);
export default Navbar;
