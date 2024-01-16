"use client";
// import { Content } from "next/font/google";
import Header from "./components/Header";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const [chat, setChat] = useState(false);
  const [nav, setNav] = useState(false);
  const { scrollYProgress } = useScroll();

  console.log(chat);

  return (
    <main className="h-screen flex flex-col overflow-y-auto overflow-x-hidden relative ">
      <Header chat={chat} setChat={setChat} nav={nav} setNav={setNav} />
      {/* <div className=""> */}
      <Hero nav={nav} setNav={setNav} />
      <Content nav={nav} setNav={setNav} />
      <Footer nav={nav} setNav={setNav} />
      {/* </div> */}
    </main>
  );
}
