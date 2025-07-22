

// experience
const experience = [
    {
        role: "Full Stack Developer",
        company: "Zithara Technologies",
        period: "Dec 2023 – March 2024",
        description: "Successfully migrated php based project to nodejs and react tech stack. Conceptualized, designed and developed a website builder application using react, tailwindcss, tanstack query and adonis JS",
        tech: ["React", "Node.js", "TailwindCSS", "Tanstack Query", "PostgreSQL"]
    },
    {
        role: "Frontend Developer ",
        company: "SynergyAI",
        period: "May 2023 – Nov 2023",
        description: "Accountable for the development of SynergyOS MVP 1.0. Contributed valuable insights during the development process. Implemented responsive design principles to ensure optimal user experience across devices.",
        tech: ["React", "TailwindCSS", " Tanstack Query", "Figma", "Jest"]
    },
    {
        role: "Full Stack Developer ",
        company: "The Recharge Company",
        period: "Sept 2022 – March 2023",
        description: "Worked on migration project in a collaborative team with fellow team members to transition a multi page experience into single page application. Implemented responsive design principles to ensure optimal user experience across devices. Transform UI to actual code",
        tech: ["React", "NextJS", "Node.js", "TailwindCSS"]
    }
]

export default function Experience() {
    return (
        <section className="space-y-4">
            <p className="text-green-400 text-2xl">// experience</p>
            <div className="bg-[#1a1b26] border border-[#414868] p-4 rounded-md">
                <p className="text-[#c0caf5]">
                    <span className="text-[#7aa2f7]">const</span> experience = [
                </p>

                <div className="ml-4 space-y-4">
                    {experience?.map((item, index) => {
                        return (
                            <div key={index}>
                                <p className="text-[#c0caf5]">&#123;</p>
                                <p className="ml-4 text-[#c0caf5]">
                                    role: <span className="text-[#9ece6a]">{item.role}</span>,
                                </p>
                                <p className="ml-4 text-[#c0caf5]">
                                    company: <span className="text-[#9ece6a]">{item.company}</span>,
                                </p>
                                <p className="ml-4 text-[#c0caf5]">
                                    period: <span className="text-[#9ece6a]">{item.period}</span>,
                                </p>
                                <p className="ml-4 text-[#c0caf5]">
                                    description:{" "}
                                    <span className="text-[#9ece6a] break-words">
                                        {item.description}
                                    </span>,
                                </p>
                                <p className="ml-4 text-[#c0caf5]">
                                    tech: <span className="text-[#9ece6a]">{item.tech.join(', ')}</span>
                                </p>
                                <p className="text-[#c0caf5]">&#125;,</p>
                            </div>
                        )
                    })}
                </div>
                <p className="text-[#c0caf5]">]</p>
            </div>
        </section>
    );
}
