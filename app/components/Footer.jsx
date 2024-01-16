import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-zinc-800 py-6 px-3 text-neutral-400 space-y-4 text-[12px] "
      id="footer"
    >
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4  ">
        <div>
          <p className="text-sm text-[#cfcfcf]">
            Karimah&lsquo;s <br />
            Portfolio
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-white">Down-Line</p>
          <ul className="space-y-1">
            <li>
              <Link href="https://drive.google.com/drive/folders/1SyHwaFmci-d9qmrkYjKrvILh6KHsQb3g">My Work(Google Drive)</Link>
            </li>
            <li>
              <Link href="https://calendly.com/karimahclaritysession/30min">Talk to me</Link>
            </li>
            <li>
              <Link href="mailto:gboladisa33@gmail.com">Contact Developing Management</Link>
            </li>
            <li>
              <Link href="mailto:abdulrazmail@gmail.com">Contact the developer</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <p className="text-white"> Major Tech Skills</p>
          <ul className="space-y-1">
            <li>
              <Link href="/">Creative writing</Link>
            </li>
            <li>
              <Link href="/">Perfect use of AI tools</Link>
            </li>
            <li>
              <Link href="/">And many others</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <p className="text-white">Contact Me</p>
          <ul className="space-y-1">
            <li>
              <Link href="http://www.instagram.com/karimah_lawal">
                <img src="" alt="" />
                <p>Instagram</p>
              </Link>
            </li>
            <li>
              <Link href="http://www.linkedin.com/in/lawal-karimah">
                <img src="" alt="" />
                <p>Linkedin</p>
              </Link>
            </li>
            <li>
              <Link href="mailto:lawalkhareemah21@gmail.com">
                <img src="" alt="" />
                <p>Gmail</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-600 w-[75%] h-[1px] m-auto"></div>
      <div>@karimah 2023 copyright</div>
    </div>
  );
};

export default Footer;
