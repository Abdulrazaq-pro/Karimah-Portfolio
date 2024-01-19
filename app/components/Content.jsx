"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// import { YouTubeEmbed } from "@next/third-parties/google";
import { useState } from "react";
import Testimonial from "./Testimonial";
import YouTube from "react-youtube";
import Link from "next/link";

const Content = () => {
  const Me = () => {
    return (
      <div
        name="test1"
        id="test1"
        className="element md:grid md:grid-cols-2 flex flex-col items-center justify-center space-y-9 border-y-[1px] py-8 border-neutral-200"
      >
        <div className="flex flex-col justify-center w-[90%] m-auto space-y-3">
          <div className="md:text-4xl text-2xl ">
            <p className="why">Why hire me?</p>
          </div>
          <p className="text-neutral-600">
            My proficiency in leveraging data analytics to optimize marketing
            strategies, combined with a track record of successful campaign
            implementions and a keen undestanding of emerging trands, makes me a
            valuable assist for driving online presence and engagement.
          </p>
        </div>
        <div className="flex items-center max-sm:w-[80%] h-[80%] justify-center">
          <div
            className="overflow-hidden md:w-[70%] max-sm:flex justify-center items-center rounded-full border-4 border-sec"
            // style={{ width: "200", height: "200", position: "relative" }}
          >
            <div className="flex items-center justify-center">
              <Image
                alt=""
                src="/images/me1.png"
                layout="responsive"
                objectFit="contain"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Youtube = () => {
    const opts = {
      height: "300",
      width: "500",
      playerVars: {
        autoplay: 1,
        // origin: window.location.origin,
      },
    };
    return (
      <div className="px-2 shadow-md space-y-5 py-10 mx-2 rounded-lg bg-[#fafafa]">
        <p className="text-center md:text-5xl text-3xl font-semibold">
          Introduction
        </p>
        <div className=" md:grid  grid-cols-2 items-center gap-2 max-sm:space-y-4 border-[1px] border-neutral-100  p-3 rounded-lg">
          <div className="rounded-2xl overflow-hidden max-sm:w-full">
            <YouTube videoId="ckXGYKz5Qu0" opts={opts} />
          </div>
          <div className="">
            <p>
              I understand the feeling that comes with getting stuck and
              frustrated resulting from poor sales. The truth is you might just
              be missing that one ingredient The right content That right
              content will drive business growth, build your brand, and help you
              generate quality leads. But guess what, your worries are about to
              turn into happiness with me in it I will handle your personal
              brand presence to move from invincible to visible Help you with
              the right content to breathe astronomical growth into your
              business Get you more followers right here on Linkedin If this
              sounds like you, the action is with you, take it now!
            </p>
            <div className=" mt-2">
              <Link
                href="https://calendly.com/karimahclaritysession/30min"
                className="px-4 py-2 my-2 bg-gradient-to-r rounded-full from-sec to-primary text-[#f1f1f1]"
              >
                Book a call now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Check = () => {
    return (
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-4">
            <h1 className="sm:text-3xl text-2xl text-center title-font text-gray-900 mb-4 font-semibold">
              My Skillset
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              These are the list of my soft skills
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-third rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Creative writing</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-third rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>

                <span className="title-font font-medium">
                  Interpersonal and Communication skills
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-third rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>

                <span className="title-font font-medium">
                  Perfect use of AI tools
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-third rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>

                <span className="title-font font-medium">
                  Social media manager, and sales
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-third rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Microsoft Word and PowerPoint, Pixel lab and Excel sheet
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-third rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-primary w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>

                <span className="title-font font-medium">And many others</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Pricings = () => {
    return (
      <div id="services" className="text-gray-600  body-font">
        <div className=" shadow-md  rounded-b-3xl">
          <div className=" m-auto border-1 flex flex-col items-center  py-4 rounded-2xl transition-all ease-in-out ">
            <div className="flex flex-col text-center w-full mb-2 md:mb-6">
              <div className="flex justify-center">
                <h1 className="md:text-3xl text-xl font-medium title-font text-gray-900 ser">
                  Offer On LinkedIn Brand Management
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-3 max-[1000px]:flex-col max-[1000px]:flex gap-2">
              <div className="px-4  ">
                <div className="flex rounded-lg bg-third h-full p-8 flex-col">
                  <div className="flex items-center mb-2 gap-2">
                    <div className="">
                      <Image
                        height={30}
                        width={30}
                        src="/images/icons\b1.png"
                        alt=""
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Bronze <span className="text-sec">$100</span>
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <ul className="leading-relaxed text-sm list-disc">
                      <li>Headline Optimization </li>
                      <li>Profile revamping</li>
                      <li>Content Calendar</li>
                      <li>Content strategy</li>
                      <li>Growth books</li>
                      <li>And access to my one-on-one mentorship, </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-4 ">
                <div className="flex rounded-lg bg-third h-full p-8 flex-col">
                  <div className="flex items-center mb-2 gap-2">
                    <div className="">
                      <Image
                        height={30}
                        width={30}
                        src="/images/icons/b2.png"
                        alt=""
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Silver <span className="text-sec">$500</span>
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <ul className="leading-relaxed text-sm list-disc">
                      <li>Headline Optimization </li>
                      <li>Profile revamping</li>
                      <li>Content Calendar</li>
                      <li>Growth books</li>
                      <li>Carousel and Text Post review</li>
                      <li>Hook review per post</li>
                      <li>CTA review per post</li>
                      <li>Sales Coaching</li>
                      <li>Access to one-on-one coaching</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-4 ">
                <div className="flex rounded-lg bg-third h-full p-8 flex-col">
                  <div className="flex items-center mb-2 gap-2">
                    <div className="">
                      <Image
                        height={30}
                        width={30}
                        src="/images/icons/b3.png"
                        alt=""
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Gold <span className="text-sec">$1000</span>
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <ul className="leading-relaxed text-sm list-disc">
                      <li className="">
                        We do it all for you, 10% participation from you
                      </li>
                      <li>5 Contents Per Week</li>
                      <li>4 Text Posts, 1 Carousel</li>
                      <li>
                        Engage active accounts before and after posting with
                        interaction with active creators and target audience
                      </li>
                      <li>
                        Content frameworks to convert and build an active
                        audience.
                      </li>
                      <li>Reply all comments</li>
                      <li>Targeted prospecting </li>
                      <li>Sales coaching per week</li>
                      <li>Reviews of past client </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-4 px-4 py-2 rounded-full bg-third max-sm:w-[80%] m-auto max-sm:text-[12px]">Content Marketing Srategies for brand and business owners</div> */}
          </div>
        </div>
      </div>
    );
  };

  const Book = () => {
    return (
      <div className="flex flex-col items-center px-6">
        <div className="text-xl">
          Content Marketing Srategies for brand and business owners
        </div>
        <div className="pl-3 pr-9 mt-3">
          I can help you create a content/marketing strategy that will boost
          your brand awareness, engagement, and conversion. A content/marketing
          strategy is a plan that guide you on what type of content to create,
          how to distribute it , and how to measure its success. It helps you
          connect with the target audience, showcase your value proposition, and
          achieve your business goals. <br />
          Schedule a call with me today and let&lsquo;s make your business
          bloom!
          <div className="">
            <Link href="https://calendly.com/karimahclaritysession/30min">
              <button className="mt-4 px-4 py-2 rounded-full bg-third  m-auto max-sm:text-[12px]">
                Book a call
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const FAQs = () => {
    const items = [
      {
        header: "How can I make money through writing?",
        content:
          "How you can make money through writing is not the question, the question is how can you work toward making writing work for you Youre with the right person to help you get that right. We can get started for you, where you get to develop your skills and portfolio which in turn make you money. Financial freedom is the end goal, lets get you started, book a call now ",
        cta: "https://calendly.com/karimahclaritysession/30min",
        id: 1,
      },
      {
        header: "How can I elevate my LinkedIn game?",
        content:
          "Through Ghostwriting, Ghostwriting is a specialized writing service where a seasoned writer, such as myself, crafts content for you while you take the creditEmploying ghostwriting services allows you to elevate not just your online visibility, but also establish authority in your field as well.You get to expand your personal brand without dedicating your whole time to writing.Sounds fun right",
        id: 2,
      },
      {
        header: "Difference between content and right content",
        content:
          "Anyone can create content, but not everyone can create the right content that drives growth, elevates the brand, and attains success, this is why you need the services of someone like me.",
        id: 3,
      },
      {
        header: "How do I get started with the right content?",
        content:
          "Getting started is simple, reach out to me through any of your preferred channels either through the contact on this website or directly through my profile service page.We get on a call to discuss your struggles and I can offer a perfect solution right for it.",
        // cta: "Lets get you relieved ",
        id: 4,
      },
    ];
    const Accordion = ({ header, content, cta }) => {
      const [open, setOpen] = useState(false);

      return (
        <div className="overflow-hidden border-b-2 border-b-[#e0c39de7] ">
          <div
            className=" z-20 px-4 py-1 text-sm flex justify-between cursor-pointer "
            onClick={() => {
              setOpen(!open);
            }}
          >
            <h1
              className={`${
                open && "border-b-[1px] border-neutral-200 ring-offset-2"
              } pb-3`}
            >
              {header}
            </h1>
            <Image
              className={`${open && "rotate-180"} transition ease-in-out`}
              height={18}
              width={18}
              src="/images/icons/wave_arrow down.svg"
              alt=""
            />
          </div>
          <div className={` ${open && "opener"} con px-7 `}>
            <p className="text-zinc-600 "> {content}</p>
            {cta && (
              <a
                className="px-2 py-1 inline-block rounded-lg bg-sec my-4 text-white"
                href="https://calendly.com/karimahclaritysession/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a session with us
              </a>
            )}
          </div>
        </div>
      );
    };
    return (
      <div className=" text-[#3d3d#3d] md:px-12 px-3 py-6" id="faqs">
        <div className="md:w-[90%] mx-auto ">
          <h1 className="text-2xl text-center font-semibold max-md:hidden">
            Frequently Asked Questions
          </h1>
          <h1 className="text-2xl text-center font-semibold md:hidden">FAQs</h1>
          <p className="text-center text-primary mb-6">
            We offer annual subscription discounts and special promotions for
            new customers
          </p>
          <div className=" space-y-3 ">
            {items.map((item) => (
              <div key={item.id}>
                <Accordion
                  header={item.header}
                  content={item.content}
                  cta={item.cta}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="space-y-10">
      <Me />
      <Youtube />
      <Pricings />
      <Book />
      <Check />
      <Testimonial />
      <FAQs />
    </div>
  );
};

export default Content;
