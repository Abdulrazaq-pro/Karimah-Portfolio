"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const items = [
    {
      header:
        "Creative Writing Fiction Story | Imaginative writing | Artful Writing",
      linker:
        "https://drive.google.com/drive/folders/1aT7y-aaeEguTvdAk5awnfHCsMsjCjYWw",
      image: "/images/image (1).jpg",
      id: 1,
    },
    {
      header:
        "Creative Writing Article | Innovative Articles | Artistic Feature",
      linker:
        "https://drive.google.com/drive/folders/1-HX9oHny08G8me-C9uVnKdB3V3w_4aPL",
      image: "/images/image (2).jpg",
      id: 2,
    },
    {
      header: "Social Media Contentve | Engaging Posts | Imaginative Posts",
      linker:
        "https://drive.google.com/drive/folders/1-HMDkjP4tSHN1qkKLF-wy2v-4hk0Uuzg",
      image: "/images/image (1).jpg",
      id: 3,
    },
    {
      header: "Real Estate Listing | Home Listing | Home Highlights",
      linker:
        "https://drive.google.com/drive/folders/1-ON6B-o8DeoOW6SJvFMsKs_7blN7sYzn",
      image: "/images/image (1).jpg",
      id: 3,
    },
  ];

  const Work = ({ header, linker, image }) => {
    function copyText(entryText) {
      navigator.clipboard.writeText(entryText);
    }
    return (
      <div className="portfolio">
        <div className="grid grid-cols-3 md:grid-cols-2  gap-4 md:w-[70%] m-auto p-4 border-[1px] border-neutral-300 rounded-lg ">
          <Link
            className="rounded-lg col-span-1 overflow-hidden relative "
            href={linker}
          >
            <div className="">
              <Image
                className="overflow-hidden"
                src={image}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </Link>
          <div className="md:space-y-5 md:col-span-1 col-span-2">
            <Link href={linker} className="md:text-3xl leading-6">
              <div className="">{header}</div>
            </Link>
            <button
              className="mt-3 px-4 py-2 text-sm rounded-full bg-neutral-100"
              onClick={() => copyText(linker)}
            >
              copy link
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-4 py-5">
      <p className="text-lg">
        {" "}
        <Link href="/">
          <span>Home</span>
        </Link>{" "}
        &gt; <span className="text-sec">Portfolio</span>
      </p>

      <div className="text-[white] bg-sec py-5 px-4 rounded-md">
        A VIEW OF WORK I HAVE WORKED ON
      </div>
      <div className="px-5">
        <p className="py-3 border-t-[1px] border-neutral-300 text-primary text-3xl font-semibold">
          Past Work
        </p>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id}>
              <Work
                header={item.header}
                linker={item.linker}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
