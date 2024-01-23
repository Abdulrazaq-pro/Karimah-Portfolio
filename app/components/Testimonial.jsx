import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import { baseUrl } from "./config";

const Testimonial = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="bg-amber-50 py-24">
      <div className=" max-sm:text-left w-[60%] max-sm:w-[90%] m-auto">
        <div className="flex justify-center">
          <h2 className="text-xl text-center font-semibold ">
            <div className=" text-sm flex justify-center mb-2 ">
              <p className="tes bg-gradient-to-b from-[#29100af5] to-sec bg-clip-text text-transparent">
                Testimonial
              </p>
            </div>
            <p className="mb-2">
              SEE WHAT <span className="text-[#741b04f5]">OTHER CLIENTS </span>
              HAS TO SAY
            </p>
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/2.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 text-neutral-600">
              Boss Lady just the way I love to call her. It was her uniqueness
              that caught my eye when I came to linkedin Her content are also
              mind blowing, educative and with little spice of entertainment.
              She really inspired me lot to stay true and be conistent As a
              copywriter and content Creator, She undertands and know who to
              write copy that aligns with emotions.
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p>Temidayo Jimoh</p>
                <p className="text-xs italic">
                  Digital Skill advocate/ Ghost Writer
                </p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/3.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 text-neutral-600">
              What sets her apart is not just her talent but her dedication to
              our project. She invested time in understanding Our industry,
              Competitors, and Target audience. Her meticulous approach ensured
              that our branding was not only visaully appealing but also
              strategically sound.
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p>Adebayo B.</p>
                <p className="text-xs italic">Process Engineering Designer</p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/4.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 max-sm:text-xs text-neutral-600">
              My Successful Emergence Journey On LinkedIn. The first time I came
              on this blue app, i suffered panic attacks and anxiety because of
              the kind of things i saw. I felt like this app were meant for some
              special kind of people and everybody here was rigid and uptight.
              Then i said to myself, what am i looking for here, this blue app
              isn&lsquo;t for me until i met an amazing lady, my beautiful coach
              Karimah Lawal Karimah Lawal is my lovely coach who have not only
              been mentoring me but also guiding me on the right paths to forge
              ahead on LinkedIn. She revamped my profile, created a study
              content calendar for me and we took it up from there. She is a
              brilliant and inspiring lady who has helped me find my voice on
              LinkedIn.
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p> Kachi Alozie.</p>
                <p className="text-xs italic">
                  Exceptional Virtual Assistant || help C-Level
                </p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/1.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 text-neutral-600">
              Lawal Kareemah has been so professional in every task given to her
              as an excutive asssitance at herself, She generate great content,
              facilated tremendous meetings and manage her role to the best of
              her capabilities. I really enjoy working with her. She is more
              than a great asset.
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p>Muhammad Lukman</p>
                <p className="text-xs italic">
                  Founder At Mohbuy Ltd./ FullStack Developer
                </p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/6.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 text-neutral-600">
              Marketing Karimah was patient enough to listen to my journey, jot
              necessary points, ask questions to get clarity on how she could be
              of help to build my personal brand and to create business
              structure. Besides, she speaks with motivation and encouragement
              on how to achieve the goal through her personal story. Karimah
              shared summary of the consulting meeting and action plan, together
              with LinkedIn content calender. The service rendered was
              satisfactory and worth more than the commitment fee.
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p>Abdulahi O. FALADE </p>
                <p className="text-xs italic">
                  Data Analyst MS Excel |Google
                  <br /> Sheet Power BI|SQL |TABLEAU |Content
                </p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
          {/* <div className="">
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/3.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 text-neutral-600">
              What sets her apart is not just her talent but her dedication to
              our project. She invested time in understanding Our industry,
              Competitors, and Target audience. Her meticulous approach ensured
              that our branding was not only visaully appealing but also
              strategically sound.
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p>Adebayo B.</p>
                <p className="text-xs italic">Process Engineering Designer</p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/images/5.jpg"
                height={55}
                width={55}
                alt=""
              />
            </div>
            <p className="my-2 text-neutral-600">
              Karimah helped me to fix my bio at a time I wasn&lsquo;t so clear
              on how to arrange it and so far have been able to structure it
              properly. Thank you so much Karima, Thank you Received 1st Worried
              about that child&lsquo;s uncontrollable screen time? | Smartphone
              Productivity Club got you!
            </p>
            <div className="flex justify-end text-left mt-2 mr-3">
              <div>
                <p>Betty Nnamdi.</p>
                <p className="text-xs italic">
                  Trained 2500+ children since 2021
                </p>
                <div className="text-[#bb2c08f5]">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
