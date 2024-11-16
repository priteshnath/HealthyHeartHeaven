import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AwarenessPage = () => {
  useEffect(() => {
    // GSAP Animation for the image and line
    gsap.to(".awareness-page-image, .awareness-page-line", {
      opacity: 1,
      x: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ".awareness-page-image",
        toggleActions: "play none none none",
        start: "top 80%",
        end: "bottom bottom", 
        scrub: 1,
      },
    });

    // GSAP Animation for the reveal of text
    gsap.to(".awareness-page-reveal", {
      opacity: 1,
      x: -10,
      duration: 2,
      scrollTrigger: {
        trigger: ".awareness-page-reveal",
        toggleActions: "play none none none",
        start: "top 75%", 
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      id="awareness"
      className="awareness-page relative flex justify-between items-center w-full h-screen mt-[30vh] bg-[#DBDBDBB3]"
    >
      <div className="awareness-page-left ml-12">
        <img
          src="/Images/Awareness-page-photo.jpg"
          alt="Awareness"
          className="awareness-page-image w-[105vw] h-[65vh] object-cover rounded-[2rem] z-10 transform -translate-x-5 opacity-0"
        />
      </div>
      <div className="h-[80%] px-[5vw]">
        <h2 className="awareness-page-reveal text-4xl mt-24 font-bold text-[#270f3a] transform translate-x-10 opacity-0">
          Awareness
        </h2>
        <p className="awareness-page-reveal text-[1.2rem] mt-3 text-[#684783] transform translate-x-10 opacity-0 max-w-[100vw]">
          Maintaining a healthy heart begins with simple lifestyle choices. Regular exercise, such as walking or cycling for at least 30 minutes a day, helps strengthen your heart and improve overall circulation. Pair this with a balanced diet rich in fruits, vegetables, lean proteins, and whole grains while avoiding processed foods and excessive salt. These habits are essential to managing weight and reducing the risk of heart disease.
        </p>
        <a
          href="https://bluenethospitals.com/blog/cardiology/10-Ways-Heart-Healthy"
          target="_blank"
          className="border border-black text-[1rem] px-2 py-1 mt-4 inline-block transition-all duration-300 hover:bg-[#270f3a] hover:text-white hover:border-transparent transform hover:translate-y-[-5%] rounded-full ml-[-10px]"
        >
          Read More
        </a>
      </div>
      <img
        src="/Images/Awareness-page-line.svg"
        alt="Line"
        className="awareness-page-line absolute top-0 left-[-15%] mt-4 transform translate-x-[-40%] opacity-0 z-[-1]"
      />
    </div>
  );
};

export default AwarenessPage;
