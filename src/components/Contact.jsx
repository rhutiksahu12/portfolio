import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="space-y-4 mb-20">
      <p className="text-green-400 text-2xl">// contact</p>
      <div className="bg-[#1a1b26] border border-[#414868] p-4 rounded-md">
        <p className="text-[#c0caf5]">
          <span className="text-[#7aa2f7]">const</span> contact = &#123;
        </p>
        <p className="ml-4 text-[#c0caf5] flex items-center flex-wrap">
          <FaEnvelope className="mr-2 text-[#7aa2f7]" />
          email: <a href="mailto:rhutiksahu@gmail.com" className="text-[#9ece6a] ml-2 hover:underline break-all">
            "rhutiksahu@gmail.com"</a>
        </p>
        <p className="ml-4 text-[#c0caf5] flex items-center flex-wrap">
          <FaGithub className="mr-2 text-[#7aa2f7]" />
          github: <a href="https://github.com/rhutiksahu12" target="_blank" rel="noopener noreferrer" className="text-[#9ece6a] ml-2 hover:underline break-all">
            "https://github.com/rhutiksahu12"</a>
        </p>
        <p className="ml-4 text-[#c0caf5] flex items-center flex-wrap">
          <FaLinkedin className="mr-2 text-[#7aa2f7]" />
          linkedin: <a href="https://www.linkedin.com/in/rhutiksahu/" target="_blank" rel="noopener noreferrer" className="text-[#9ece6a] ml-2 hover:underline break-all">
            "https://www.linkedin.com/in/rhutiksahu/"</a>
        </p>
        <p className="ml-4 text-[#c0caf5] flex items-center flex-wrap">
          <FaMapMarkerAlt className="mr-2 text-[#7aa2f7]" />
          location: <span className="text-[#9ece6a] ml-2 break-all">"Hyderabad, India"</span>
        </p>
        <p className="text-[#c0caf5]">&#125;</p>
      </div>
    </section>
  )
}

export default Contact