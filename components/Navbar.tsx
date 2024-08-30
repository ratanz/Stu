'use client';

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50
      ${visible ? "translate-y-0" : "-translate-y-full"}
      ${prevScrollPos > 0 ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="w-full h-[5vw] flex items-center justify-between">
        <div className="nav-item p-14 flex items-center justify-between w-full font-[Satoshi]">
          <div className="logo">
            <h1 className="text-white text-3xl">Studio Size</h1>
          </div>
          <div className="nav-text text-white flex items-center justify-between w-68 gap-8 font-medium text-[1.2vw]">
            <NavItem index={0}>Home</NavItem>
            <NavItem index={1}>Portfolio</NavItem>
            <NavItem index={2}>Studio</NavItem>
            <NavItem index={3}>Labs</NavItem>
            <NavItem index={4}>Contact</NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`nav-item-wrapper relative overflow-hidden ${
        isEven ? "even-item" : "odd-item"
      }`}
    >
      <h1 className="cursor-pointer transition-colors duration-300">
        {children}
      </h1>
      <div
        className={`absolute bottom-0 ${
          isEven ? "left-0" : "right-0"
        } w-0 h-0.5 bg-white transition-all duration-300 ease-out`}
      ></div>
    </div>
  );
};

export default Navbar;
