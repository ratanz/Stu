'use client';

import React, { useState, useEffect, useRef } from "react";
import {gsap } from "gsap";


interface NavItemProps {
  children: React.ReactNode;
  index: number;
  menuItem?: boolean;
}

interface NavItemProps {
  children: React.ReactNode;
  index: number;
  menuItem?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, index, menuItem = false }) => {
  const isEven = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    const underline = underlineRef.current;

    if (!item || !underline) return;

    const handleMouseEnter = () => {
      gsap.to(underline, { width: '100%', duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(underline, { width: '0%', duration: 0.3, ease: 'power2.in' });
    };

    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`nav-item-wrapper relative overflow-hidden ${
        isEven ? "even-item" : "odd-item"
      } mb-6 md:mb-0`}
    >
      <h1 className={`cursor-pointer transition-colors duration-300 text-lg md:text-[1.2vw] ${menuItem ? 'text-black' : 'text-white'}`}>
        {children}
      </h1>
      <div
        ref={underlineRef}
        className={`underline absolute bottom-0 ${
          isEven ? "left-0" : "right-0"
        } w-0 h-0.5 ${menuItem ? 'bg-black' : 'bg-white'} transition-all duration-300 ease-out`}
      ></div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const menuElement = menuRef.current;
    const hamburgerElement = hamburgerRef.current;

    if (isMenuOpen) {
      // Opening animation
      gsap.to(menuElement, {
        height: '100%',
        duration: 0.2,
        ease: 'back.in(1.2)',
      });
      gsap.to(hamburgerElement, {
        color: 'black',
        duration: 0.4,
        ease: 'power3.inOut',
      });
    } else {
      // Closing animation
      gsap.to(menuElement, {
        height: '0%',
        duration: 0.2,
        ease: 'circ.out',
      });
      gsap.to(hamburgerElement, {
        color: 'white',
        duration: 0.7,
        ease: 'power2.out',
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${prevScrollPos > 0 ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="w-full h-[60px] flex items-center justify-between px-4 md:px-14">
          <div className="logo">
            <h1 className="text-white text-2xl md:text-3xl">Studio Size</h1>
          </div>
          <div className="hidden md:flex nav-text text-white items-center justify-between w-68 gap-8 font-medium text-[1.2vw]">
            <NavItem index={0}>Home</NavItem>
            <NavItem index={1}>Portfolio</NavItem>
            <NavItem index={2}>Studio</NavItem>
            <NavItem index={3}>Labs</NavItem>
            <NavItem index={4}>Contact</NavItem>
          </div>
          <button
            ref={hamburgerRef}
            className="md:hidden text-white text-2xl focus:outline-none z-50 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      <div
        ref={menuRef}
        className="md:hidden fixed top-0 left-0 w-full bg-white overflow-hidden transition-all duration-300 ease-in-out z-40"
        style={{ height: "0%" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <NavItem index={0} menuItem>Home</NavItem>
          <NavItem index={1} menuItem>Portfolio</NavItem>
          <NavItem index={2} menuItem>Studio</NavItem>
          <NavItem index={3} menuItem>Labs</NavItem>
          <NavItem index={4} menuItem>Contact</NavItem>
        </div>
      </div>
    </>
  );
};

export default Navbar;
