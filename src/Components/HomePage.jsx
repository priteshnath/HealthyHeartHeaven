import React, { useEffect } from "react";
import { gsap } from "gsap";

const HomePage = () => {
  useEffect(() => {
    // GSAP Animation for Title
    gsap.fromTo(
      ".home-page-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: -10, duration: 1.5,  ease : "power1.in"}
    );

    // GSAP Animation for Image and Line
    gsap.fromTo(
      ".home-page-image",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".home-page-line",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.7, ease: "power3.out" }
    );
  }, []);

  return (
    <main
      id="home"
      className="home-page flex justify-center items-center w-full h-screen relative mt-10 mb-20"
    >
      <div className="home-container flex flex-col items-center justify-center w-[95vw] h-[80vh] rounded-[2rem] bg-[#270f3a]">
        <h2 className="home-page-title text-white text-7xl font-bold text-center w-[60vw] mt-[40vh]">
          Our mission is to make healthcare more accessible
        </h2>
        <img
          src="/Images/home-page-photo.jpg"
          alt="Home Page"
          className="home-page-image w-[70vw] rounded-[2rem] mt-[3rem] z-10"
        />
      </div>
      <img
        src="/Images/home-page-line.svg"
        alt="Home Line"
        className="home-page-line absolute top-[23%] left-[-2%] w-[120vw]"
      />
    </main>
  );
};

export default HomePage;
