"use client";

import React, { ReactNode, useState } from "react";

interface SocialLinkProps {
  name: string;
  videoSrc: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
  totalLinks: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  name,
  videoSrc,
  isActive,
  onMouseEnter,
  onMouseLeave,
  index,
  totalLinks,
}) => {
  const isFirst = index === 0;
  const isLast = index === totalLinks - 1;

  const getVideoPosition = () => {
    if (isFirst) return "left-0";
    if (isLast) return "right-0";
    return "left-1/2 -translate-x-1/2";
  };

  return (
    <li
      className="video-content cursor-pointer relative w-full h-full "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1
        className={` transition-all duration-300 ease-in-out transform group-hover:text-white absolute  text-white flex justify-center
          items-center w-full  gap-24 tracking-wide text-2xl
          ${isActive ? "opacity-100 scale-110" : "opacity-50 scale-100"}`}
      >
        {name}
      </h1>

      {isActive && (
        <div
          className={`absolute top-10 w-[20vw] transition-all duration-500 ease-in-out`}
          style={{
            left: isFirst ? "10%" : isLast ? "-192%" : "50%",
            right: isLast ? "0" : "auto",
            transform: !isFirst && !isLast ? "translateX(-50%)" : "none",
          }}
        >
          <video
            src={videoSrc}
            loop
            playsInline
            muted
            autoPlay
            preload="metadata"
            className="shadow-lg object-cover w-full h-auto rounded-md "
          />
        </div>
      )}
    </li>
  );
};

interface SocialLinkData {
  name: string;
  videoSrc: string;
}

const Footer: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const socialLinks: SocialLinkData[] = [
    {
      name: "Instagram",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Instagram.mp4",
    },
    {
      name: "Behance",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Behance.mp4",
    },
    {
      name: "Dribbble",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Dribbble.mp4",
    },
    {
      name: "Vimeo",
      videoSrc: "https://studio-size.com/wp-content/uploads/2024/05/Vimeo.mp4",
    },
    {
      name: "Youtube",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Youtube.mp4",
    },
    {
      name: "LinkedIn",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Linkedin.mp4",
    },
    {
      name: "Savee.it",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Saveeit.mp4",
    },
    {
      name: "Fonts in Use",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Fonts-in-use.mp4",
    },
    {
      name: "Pinterest",
      videoSrc:
        "https://studio-size.com/wp-content/uploads/2024/05/Pinterest.mp4",
    },
  ];

  return (
    <div className="footer-content w-full relative h-[58vw] overflow-hidden pt-40 bg-black p-14">
      <ul className="links flex w-full list-none border-b-2 gap-14 border-zinc-800 h-16 ">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.name}
            name={link.name}
            videoSrc={link.videoSrc}
            isActive={activeLink === link.name}
            onMouseEnter={() => setActiveLink(link.name)}
            onMouseLeave={() => setActiveLink(null)}
            index={index}
            totalLinks={socialLinks.length}
          />
        ))}
      </ul>

      <div className="link2 flex mt-14 relative">
        <div className="">
          <h1 className="text-zinc-400 font-sans w-32 hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105">Small is beautiful.</h1>
        </div>

        <div className="flex justify-end w-full items-center font-sans gap-10 mb-10 absolute">
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105">Index</h1>
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105 ">About</h1>
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105 ">Blog</h1>
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105">Privacy Policy</h1>
          <h1 className="text-zinc-400 cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out">
            © Size—All rights reserved.
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center w-[100%] ">
        <h1 className="text-white text-[31vw] font-sans font-bold leading-none relative right-5">Footer
          <span className="text-2xl absolute right-14 bottom-10">©</span>
        </h1>
   
      </div>
    
    </div>
  );
};

export default Footer;
