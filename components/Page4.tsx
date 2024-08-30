'use client';

import React , { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {

  useEffect(() => {
    const text = document.querySelector(".text-content-2");

    gsap.fromTo(
      text,
      {
        y: "110%", // Start from below the view
        opacity: 0, // Start as invisible
      },
      {
        y: "0%", // End at its original position
        opacity: 1, // Fade in to visible
        duration: 1, // Duration of the animation
        ease: "power2.out", // Easing function
        scrollTrigger: {
          trigger: text, // The text element triggers the animation
          start: "top bottom", // Animation starts when the top of the text reaches the bottom of the viewport
          end: "top 30%", // Animation ends when the top of the text reaches 60% of the viewport
          scrub: 2, // Smooth animation linked to scroll position with a 1-second lag
        },
      }
    );
  }, []);



  return (
    <>
      <div className="main bg-black w-full h-[55vw] p-14 font-[Satoshi]">
        <div className="text-content-2 flex w-full flex-row]">
          <h1 className="text-white text-[5.4vw] font-bold  leading-none ">
            Back to the simple, <br />
            intuitive, and inspiring
          </h1>
        </div>
        <div className="content flex p-10 h-[40vw] items-center justify-between">
          <div className="video w-[35vw]  p-10 flex items-center justify-center object-cover">
            <video
              autoPlay
              muted
              loop
              src="https://studio-size.com/wp-content/uploads/2024/06/size_clients_compressed.mp4"
            ></video>
          </div>
          <div className="text text-white flex mt-24 flex-col w-[46vw] px-10 justify-center">
            <h1 className="text-[1.6vw] font-bold leading-tight">
              Big multinational companies or small local brands. Partner
              approach with one universal goal - to create authentic,
              functional, and beautiful design.
            </h1>
            <h1 className="mt-10 font-bold text-2xl flex items-center gap-10">
              Lets talk
              <button
                className="p-2 pl-3 pr-3  bg-[#252525cb] border-1 border-gray rounded-full text-white hover:bg-[#424242e7]
             transtion-all duration-300 ease-in-out hover:scale-110"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
