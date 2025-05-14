import React from 'react'


const skills = [
  "React",
  "Next.js",
  "React-Native",
  "Tailwindcss",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker"
]
const Skills = () => {
  return (
    <section className="space-y-4">
      <p className="text-green-400 text-2xl">// tech-stack</p>
      <div className="bg-[#1a1b26] border border-[#414868] p-4 rounded-md">
        <p className="text-[#c0caf5]">
          <span className="text-[#7aa2f7]">const</span> skills = [<br />
          {skills.map((skill, index) => {
            return (
              <>
                <span key={index} className="ml-6 text-[#9ece6a]">{skill},</span>
                <br />
              </>
            )
          })}
          {/* <span className="ml-6 text-[#9ece6a]">"React",</span>
          <br />
          <span className="ml-6 text-[#9ece6a]">"Node.js",</span>
          <br />
          <span className="ml-6 text-[#9ece6a]">"Express",</span>
          <br />
          <span className="ml-6 text-[#9ece6a]">"MongoDB",</span>
          <br />
          <span className="ml-6 text-[#9ece6a]">"PostgreSQL",</span>
          <br />
          <span className="ml-6 text-[#9ece6a]">"TailwindCSS",</span>
          <br />
          <span className="ml-6 text-[#9ece6a]">"Git & GitHub"</span>
          <br /> */}
          ];
        </p>
      </div>
    </section>
  )
}

export default Skills