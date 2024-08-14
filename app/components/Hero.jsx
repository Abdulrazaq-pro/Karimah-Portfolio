import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ nav, setNav }) => {
  return (
    <div className={`text-center max-sm:text-left ${nav ? "opacity-50" : ""}`}>
      <div className="py-8 m-auto space-y-5">
        <p className="md:text-6xl text-3xl px-4 font-semibold bg-gradient-to-br bg-clip-text text-transparent  from-[black] via-[#9c0c0c] to-[black] py-2">
          Lift up your social presence with top notch writing services
        </p>
        <p className="px-4 m-auto text-neutral-600">
          If writing the content could turn your personal and business brand
          into a money making machine , would you take the chance
        </p>
        <div className="flex px-4 max-sm:text-xs md:justify-center gap-2 m-auto md:items-center">
          <div>
            <Link
              target="_blank"
              href="https://calendly.com/karimahclaritysession/30min"
              className=" "
            >
              <button className="rounded-full px-4 py-2 border-none border-2 text-white bg-gradient-to-br from-sec to-primary hover:text-primary hover:border-2 hover:border-primary hover:font-bold text-primary hover:from-[#e0c3bbf5] hover:to-[#e0c3bbf5] animate-bounce shadow-xl">
                Book a call
              </button>
            </Link>
          </div>
          <div>
            <Link
              className=""
              href="/#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <button className="rounded-full px-4 text-sec py-2 border-2 border-primary hover:outline-2 hover:outline-primary hover:outline-dotted outline-offset-2 hover:font-semibold">
                Our services
              </button>
            </Link>
          </div>
        </div>
        <div className="px-4 socials flex md:justify-center gap-3 items-center ml-3">
          <Link href="mailto:lawalkhareemah21@gmail.com" className="w-[30px]">
            <Image
              src="/images/icons/gmail2.png"
              height={20}
              width={20}
              // fill={true}
              layout="responsive"
              // objectFit="cover"
              alt="a picture"
              objectFit="cover"
            />
          </Link>
          <div className="h-1 w-1 bg-black"></div>

          <Link
            href="http://www.linkedin.com/in/lawal-karimah"
            className="w-[30px]"
          >
            <Image
              src="/images/icons/linkedin.svg"
              height={20}
              width={20}
              layout="responsive"
              alt="a picture"
              objectFit="cover"
            />
          </Link>
          <div className="h-1 w-1 bg-black"></div>

          <Link
            href="http://www.instagram.com/karimah_lawal"
            className="w-[30px]"
          >
            <Image
              src="/images/icons/instagram.svg"
              height={20}
              width={20}
              // fill={true}
              layout="responsive"
              // objectFit="cover"
              alt="a picture"
              objectFit="cover"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center my-10">
        <div className="">
          <Image
            src="/images/image (1).jpg"
            height={200}
            width={200}
            // fill={true}
            layout="responsive"
            // objectFit="cover"
            alt="a picture"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="/images/image (2).jpg"
            height={200}
            width={200}
            layout="responsive"
            objectFit="cover"
            alt="a picture"
          />
        </div>
        <div>
          <Image
            src="/images/image (3).jpg"
            height={200}
            width={200}
            layout="responsive"
            objectFit="cover"
            alt="a picture"
          />
        </div>
        <div className="max-sm:hidden">
          <Image
            src="/images/image (4).jpg"
            height={200}
            width={200}
            layout="responsive"
            objectFit="cover"
            alt="a picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
