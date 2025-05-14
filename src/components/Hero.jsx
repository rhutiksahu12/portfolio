// src/components/Hero.jsx
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React + Node.js Specialist",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="space-y-6">
      <h1 className="text-3xl sm:text-5xl text-[#9ece6a]">
        <span className="text-[#7aa2f7]">//</span> hello-world
      </h1>
      <p className="text-xl text-[#c0caf5]">
        <span className="text-[#7dcfff]">Hi, I'm</span>{" "}
        <span className="text-[#bb9af7] font-bold">Rhutik Sahu</span>
        <br />
        <span className="text-[#9ece6a]">
          {text}
          <Cursor />
        </span>
      </p>
    </section>
  );
}
