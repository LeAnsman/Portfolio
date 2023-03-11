import React from "react";
import ContactForm from "../components/ContactForm";
import ContactLinks from "../components/ContactLinks";

export default function Contact() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center text-white relative"
        id="contact"
      >
        <div className="mb-20 text-4xl" data-aos="fade-up">
          <h5 className="glitch">CONTACT ME</h5>
          <h5 className="glitch">CONTACT ME</h5>
          <h5 className="glitch">CONTACT ME</h5>
        </div>

        <div
          className="w-full md:w-3/4 bg-white/5 p-5 rounded-lg shadow-lg font-roboto"
          data-aos="fade-right"
        >
          <p className="text-center pb-8" data-aos="fade-in">
            I am here to <span className="text-secondary">help</span> and{" "}
            <span className="text-secondary">answer</span> any question you
            might have.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
