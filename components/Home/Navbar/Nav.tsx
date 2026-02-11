"use client";
import { NavLinks } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed w-full transition-all duration-200 h-[12vh] z-[10000] ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5  h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            JOÃO
          </h1>
        </div>
        {/* navLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.url);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-base hover:text-cyan-300 text-white 
            font-medium transition-all duration-100 cursor-pointer"
              >
                <p>{link.label}</p>
              </a>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* Burguer Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
