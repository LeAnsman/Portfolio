import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let inputClassName =
    "peer h-12 w-full border-2 px-4 bg-white/5 border-secondary shadow-md placeholder-transparent focus:border-secondary focus:ring-secondary text-white ";
  let labelClassName =
    "absolute p-2 left-3 -top-7 bg-transparent text-secondary transition-all peer-placeholder-shown:p-2 peer-placeholder-shown:text-secondary  peer-placeholder-shown:text-primary peer-placeholder-shown:top-1 peer-focus:-top-10 peer-focus:text-secondary ";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, message };

    // emailjs
    //   .sendForm(
    //     "contact_service",
    //     "template_default",
    //     data,
    //     "mdanuWGQy8-t9drwY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // toast(<p>Thanks for sending a message! 🤝</p>);
    toast.error("An error occured, please try again later.");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className="flex flex-col items-center gap-12 w-full mt-6 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-4 w-full">
        <div className="relative w-full cursor-pointer">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClassName}
            required
            placeholder="name"
            min={3}
            max={20}
          />
          <label htmlFor="name" className={labelClassName}>
            Name
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
            required
            placeholder="email"
          />
          <label htmlFor="email" className={labelClassName}>
            Email address
          </label>
        </div>
      </div>
      <div className="relative w-full">
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClassName + "h-48 sm:h-72 py-2"}
          required
          placeholder="message"
        ></textarea>
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
      </div>
      <button
        type="sumbit"
        className="btn__home font-sourceCodePro text-secondary border border-secondary py-4 px-6 transition duration-500 hover:text-primary"
      >
        <p className="animate-pulse">Get in touch!</p>
      </button>
    </form>
  );
}
