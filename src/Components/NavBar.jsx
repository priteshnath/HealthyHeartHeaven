import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

const NavBar = () => {
  useEffect(() => {
    // GSAP Animation for Navbar
    gsap.to("nav", {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <header>
      <nav className="fixed top-0 w-full bg-white flex items-center justify-between px-8 py-2 opacity-0 z-50">
        {/* Left Side */}
        <div className="leftnav">
          <h1 className="text-3xl font-bold text-[#270f3a] cursor-pointer ">
            Healthy Heart Heaven
          </h1>
        </div>

        {/* Right Side */}
        <div className="rightnav">
          <ul className="flex space-x-6 items-center py-2 px-10">
            <li>
              <Link
                to="home" // Use the ID of the target section
                smooth={true} // Enable smooth scroll
                duration={500} // Set duration of scroll
                className="cursor-pointer text-lg font-semibold text-black hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="awareness"
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg font-semibold text-black hover:text-orange-500 transition-colors"
              >
                Awareness
              </Link>
            </li>
            <li>
              <Link
                to="hear-from-patient"
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg font-semibold text-black hover:text-orange-500 transition-colors"
              >
                Hear from patients
              </Link>
            </li>
            <li>
              <Link
                to="checkup"
                smooth={true}
                duration={500}
                className="cursor-pointer quotebtn text-lg font-semibold text-white bg-[#270f3a] px-6 py-2 rounded-full hover:bg-[#13091c] transition-all"
              >
                Quick Checkup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
