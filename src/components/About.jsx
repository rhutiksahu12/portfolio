import React from 'react'

const About = () => {
    return (
        <section className="space-y-4">
            <p className="text-green-400 text-2xl">// about-me</p>
            <div className="bg-[#1a1b26] border border-[#414868] p-4 rounded-md">
                <p className="text-[#c0caf5]">
                    <span className="text-[#7aa2f7]">const</span> aboutMe = &#123;
                </p>
                <p className="ml-4 text-[#c0caf5]">
                    name: <span className="text-[#9ece6a]">"Rhutik Sahu"</span>,
                </p>
                <p className="ml-4 text-[#c0caf5]">
                    role: <span className="text-[#9ece6a]">"Full Stack Developer"</span>,
                </p>
                <p className="ml-4 text-[#c0caf5]">
                    focus: <span className="text-[#9ece6a]">"Building optimised, responsive and scalable web applications"</span>,
                </p>
                <p className="text-[#c0caf5]">&#125;</p>
            </div>
        </section>
    );
}

export default About