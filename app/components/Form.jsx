"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Form = ({setChat}) => {
  const [send, setSend] = useState("Send");
  const [isLoading, setIsLoading] = useState(false);
  const [recipientMail, setRecipientMail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientMessage, setRecipientMessage] = useState("");

  emailjs.init("QLrOTvrs_8wB1VDQm");
  // emailjs.init("RfMtOfm3ceuX_9cCh");

  const emailParams = {
    to_email: recipientMail,
    from_name: "Kharimah",
    to_name: recipientName,
  };
  const emailParamsMe = {
    to_email: recipientMail,
    // from_name: recipientMail,
    message: recipientMessage,
    to_name: recipientName,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);
    console.log("setloading" + isLoading);
    setRecipientMail("");
    setRecipientName("");
    setRecipientMessage("");
    setChat(false)

    emailjs.send("service_wk06v7t", "template_baauotw", emailParams).then(
      function (response) {
        console.log("Email sent successfully", response);
        setSend("sent");
      },
      function (error) {
        setSend("An error occured");
        console.log("Email failed to send", error);
      }
    );
    emailjs.send("service_wk06v7t", "template_ppqbmls", emailParamsMe).then(
      function (response) {
        console.log("Email sent successfully", response);
      },
      function (error) {
        setSend("An error occured");
        console.log("Email failed to send", error);
      }
    );
  };

  return (
    <div className="">
      <div className="m-auto ">
        {/* <p className="primary text-lg to-secondary bg-gradient-to-tr from-primary bg-clip-text text-transparent font-semibold">
          Send me a message !
        </p> */}
        <p className="text-sm text-neutral-600 mb-4">
          Got a question? Go ahead.
        </p>
        <form className="space-y-3 px-5" action="">
          <div className="rounded-sm space-y-5">
            {/* <label htmlFor="name">Your name</label> */}
            <input
              onChange={(e) => {
                setRecipientName(e.target.value);
              }}
              className="text-sm text-neutral-700 bg-bgdark"
              placeholder="write your name"
              type="text"
              id="name"
              value={recipientName}
            />
          </div>
          <div>
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              onChange={(e) => {
                setRecipientMail(e.target.value);
              }}
              className=" text-sm text-neutral-700 bg-bgdark  "
              placeholder="email?"
              type="email"
              id="email"
              value={recipientMail}
            />
          </div>
          <div>
            {/* <label htmlFor="message">Your Message</label> */}
            <textarea
              onChange={(e) => {
                setRecipientMessage(e.target.value);
              }}
              className="text-neutral-700 bg-bgdark "
              placeholder="your message"
              type="text"
              id="message"
              value={recipientMessage}
            />
          </div>
          <button
            type="submit"
            onClick={sendEmail}
            className="flex gap-1 justify-center items-center py-1 px-3 bg-gradient-to-tr from-sec to-primary opacity-90 rounded-md text-white"
          >
            <div>{send}</div>
            <div>
              <img
                className="w-[16px]"
                src="/images/icons/Telegram.svg"
                alt=""
              />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
