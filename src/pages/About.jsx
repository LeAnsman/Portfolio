import { Player } from "@lottiefiles/react-lottie-player";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center"
      id="about"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 text-white text-left gap-16">
        <div className="flex flex-col justify-center items-center gap-16 font-roboto uppercase text-4xl ">
          <div data-aos="fade-down">
            <h2 className="glitch">About Me</h2>
            <h2 className="glitch">About Me</h2>
            <h2 className="glitch">About Me</h2>
          </div>
          <div className="shine" data-aos="fade-down">
            <figure className="rounded-full overflow-hidden w-1/2 mx-auto">
              <img
                src="/assets/Anselme.png"
                alt=""
                className="bg-white/75 rounded-full"
              />
            </figure>
          </div>
        </div>
        <div className="font-sourceCodePro flex flex-col gap-4">
          <p data-aos="fade-up">
            My name is{" "}
            <span className="font-bold text-secondary">Anselme Dor</span>, I'm a
            junior full stack developer currently completing my training
            @BeCode.
          </p>
          <p data-aos="fade-up">
            My experience @BeCode led me to learn various aspects of{" "}
            <span className="font-bold text-secondary">web development</span>{" "}
            but also working in teams.
          </p>
          <p data-aos="fade-up">
            I had the opportunity to do serveral{" "}
            <a
              href="#work"
              className="hover-underline-animation font-bold text-secondary animate-pulse"
            >
              projects
            </a>{" "}
            (in groups / alone) and not only learn the theory.
          </p>
          <p data-aos="fade-up">
            I am passionate about creating beautiful websites with intuitive and
            easy to use <span className="font-bold text-secondary">UI</span>.
          </p>
          <p data-aos="fade-up">
            I'm currently looking for an internship to complete my training
            @BeCode. Interested in working with me ? You can always{" "}
            <a
              href="#contact"
              className="hover-underline-animation font-bold text-secondary animate-pulse"
            >
              contact me
            </a>
            .
          </p>
        </div>
      </div>
      <div className="hidden absolute lg:flex left-20">
        <Parallax speed={-20}>
          <img
            src="/assets/RoundTextPurple.png"
            alt="Round text"
            className="w-[30%] animate-spinSlow"
          />
        </Parallax>
      </div>
    </section>
  );
}
