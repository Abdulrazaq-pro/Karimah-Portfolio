"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Form from "./Form";

const Header = ({
  select,
  setSelect,
  navChange1,
  navChange2,
  chat,
  setChat,
  nav,
  setNav,
}) => {
  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }
  return (
    <div className="px-4 py-4 flex justify-between items-center navbar top-0 left-0  shadow-sm ">
      <div>
        <a className="logo z-[1000]font-semibold" href="/">
          Ka
          <span className=" bg-gradient-to-br from-primary bg-clip-text text-transparent ">
            Rimah
          </span>
        </a>
        <div className="flex items-center gap-1 -mt-1">
          <div className="h-[6px] w-8 bg-primary"></div>
          <p className="text-[7px]">portfolio</p>
        </div>
      </div>
      <div className="hidden md:flex md:text-sm text-neutral-800 ">
        <ul className="flex justify-between gap-3 ">
          <li
            onClick={navChange1}
            className={`relative ${select === "home" && "select"}`}
          >
            <Link
              className="flex gap-1"
              href="portfolio"
            >
              <Image
                width={15}
                height={15}
                src="/images/icons/hard drive.svg"
                alt=""
              />
              <p>Portfolio</p>
            </Link>
          </li>
          <li className="border-r-2"></li>

          <li
            onClick={navChange2}
            className={`relative   ${select === "about" && "select"}`}
          >
            <Link
              className="flex gap-1"
              href="/#test1"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("test1")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image
                width={15}
                height={15}
                src="/images/icons/profile.svg"
                alt=""
              />
              <p>About </p>
            </Link>
          </li>
          <li className="border-r-2"></li>
          <li className={`relative ${select === "about" && "select"}`}>
            <div className="flex gap-1 item-center">
              <img className="w-4" src="/images/icons/arrow down.svg" alt="" />
              <a href="/cv.pdf" download="Karimah CV">
                Download CV
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="relative">
        <div
          className={`z-1000 absolute top-0 rounded-lg right-0 mt-6 mr-3 shadow-xl  ${
            chat ? "translate-x-0" : "translate-x-[400px]"
          }`}
        >
          <div className="z-[1000] bg-white rounded-lg py-11 px-5 ">
            <Form setChat={setChat} />
            <p
              onClick={() => {
                setChat(false);
              }}
              className="absolute top-0 left-o text-lg"
            >
              <img
                className="w-4 mt-2"
                src="/images/icons/multiply.svg"
                alt=""
              />
            </p>
          </div>
        </div>
        <div className={`flex gap-2`}>
     

          <Link className={`bg-neutral-100 rounded-full px-4 py-2 flex gap-1 ${nav && "opacity-50"}`} href="portfolio">
            <Image
              width={15}
              height={15}
              src="/images/icons/hard drive.svg"
              alt=""
            />
            <div className="flex gap-1">
              <p className="text-sm">Portfolio </p>
              <Image
                className="-translate-y-1"
                width={15}
                height={15}
                src="/images/icons/arrow right up.svg"
              />
            </div>
          </Link>

          <div className="menu md:hidden flex items-center justify-center gap-4">
            <p
              onClick={() => {
                setNav(!nav);
              }}
              onMouseLeave={() => {
                setNav(false);
              }}
            >
              <img
                className={`${nav ? "rotate-45" : ""} transition ease-in-out`}
                src="/images/icons/plus.svg"
                alt=""
              />
            </p>
          </div>
        </div>

        {/* navigation */}
        <div
          className={`fixed w-[65%] left-0 top-0 py-10 px-5 text-lg h-full z-[900] 
          ${nav ? "translate-x-[0%]" : "translate-x-[-150%]"} 
         ease-in-out transition text-[#3d3d3d] bg-gradient-to-tr pt-20 bg-[white] shadow-2xl text-center `}
        >
          <ul className=" space-y-3 navigation">
            <li
              onClick={navChange1}
              className={`relative ${select === "home" && "select"}`}
            >
              <div
                className={`  gap-[2px] px-2 flex items-center cursor-pointer`}
                onClick={() => {
                  setChat(true);
                }}
              >
                <Image
                  width={16}
                  height={16}
                  src="/images/icons/Telegram copy.svg"
                  alt=""
                />
                <p className="">Send Mail</p>
              </div>
            </li>
            <li className="border-t-[1px] bg-[#181818]"></li>
            <li
              onClick={navChange2}
              className={`relative ${select === "about" && "select2"}`}
            >
              <Link
                className="flex gap-1"
                href="/#test1"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("test1")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  width={15}
                  height={15}
                  src="/images/icons/profile.svg"
                  alt=""
                />
                <p>About Me</p>
              </Link>
            </li>
            <li className="border-t-[1px] bg-[#181818]"></li>
            <li className={`relative ${select === "about" && "select"}`}>
              <div className="flex gap-1 item-center">
                <img
                  className="w-4"
                  src="/images/icons/arrow down.svg"
                  alt=""
                />
                <a href="/cv.pdf" download="Karimah CV">
                  Download CV
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
