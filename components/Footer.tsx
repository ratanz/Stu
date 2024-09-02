"use client";

import React, { ReactNode, useState, useEffect } from "react";

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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust this breakpoint as needed
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  const getDesktopStyles = () => {
    if (!isDesktop) return {};
    
    return {
      left: isFirst ? "5%" : isLast ? "-192%" : "50%",
      right: isLast ? "0" : "auto",
      transform: !isFirst && !isLast ? "translateX(-50%)" : "none",
    };
  };

  return (
    <li
      className="video-content cursor-pointer relative w-full h-full "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1
        className={` transition-all duration-300 ease-in-out transform group-hover:text-white absolute  text-white flex lg:justify-center
          lg:items-center w-full  gap-24 tracking-wide lg:text-2xl text-xl lg:p-0 px-5
          ${isActive ? "opacity-100 scale-110" : "opacity-50 scale-100"}`}
      >
        {name}
      </h1>

      {isActive && (
        <div
          className={`absolute lg:top-10 top-2 left-28 lg:w-[20vw] w-[67vw] transition-all duration-500 ease-in-out z-50`}
          style={getDesktopStyles()}
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
    <div className="footer-content w-full relative lg:h-[58vw] h-[180vw] overflow-hidden lg:pt-40 pt-14 bg-black lg:p-14 p-4 ">
      <ul className="links flex w-full lg:flex-row flex-col list-none lg:border-b-2 lg:gap-14 gap-10 border-zinc-800 lg:h-16 z-50 ">
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

      <div className="link2 flex lg:mt-14 mt-[35vw] lg:h-5 lg:w-auto relative">
        <div className="">
          <h1 className="text-zinc-400 font-sans lg:w-34  hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105 lg:text-xl text-[10px]">Small is beautiful.</h1>
        </div>

        <div className="flex justify-end w-full h-full lg:text-xs text-[7px] items-center font-sans lg:gap-10 gap-2  mb-10 absolute">
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105">Index</h1>
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105 ">About</h1>
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105 ">Blog</h1>
          <h1 className="text-zinc-400 hover:cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out hover:scale-105">Privacy Policy</h1>
          <h1 className="text-zinc-400 cursor-pointer hover:text-zinc-100 transition-all duration-300 ease-in-out">
            © Size—All rights reserved.
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center w-[100%] lg:mt-0 mt-6 ">
        <h1 className="text-white lg:text-[31vw] text-[28vw] font-sans font-bold leading-none relative lg:right-5">Footer
          <span className="lg:text-2xl text-[16px] absolute lg:right-14 lg:bottom-10 bottom-0 right-0">©</span>
        </h1>
   
      </div>
    
    </div>
  );
};

export default Footer;
