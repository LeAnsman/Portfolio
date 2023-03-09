import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center text-white"
        id="contact"
      >
        <div
          className="w-full md:w-3/4 bg-white/5 p-5 rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          <h6 className="text-xl text-center pb-12" data-aos="fade-in">
            I am here to{" "}
            <span className="hover-underline-animation text-secondary">
              help
            </span>{" "}
            and{" "}
            <span className="hover-underline-animation text-secondary">
              answer
            </span>{" "}
            any question you might have.
          </h6>
          <ContactForm />
        </div>
      </section>
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-white"></section>
    </>
  );
}
