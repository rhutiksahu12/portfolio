import React from 'react'

const Projects = () => {
  return (
    <section className="space-y-4">
      <p className="text-green-400 text-2xl">// projects</p>
      <div className="bg-[#1a1b26] border border-[#414868] p-4 rounded-md space-y-6">
        <div>
          <p className="text-[#9ece6a]">$</p>
          <p className="ml-4 text-[#c0caf5]">
            git clone <span className="text-[#7aa2f7]">https://github.com/rhutiksahu12/hireFrontTrae</span>
          </p>
          <p className="ml-4 text-[#c0caf5]">
            A full-stack job board app built with React, Tailwind, and Supabase. Includes applicant tracking, employer dashboards, and real-time updates.
          </p>
        </div>

        <div>
          <p className="text-[#9ece6a]">$</p>
          <p className="ml-4 text-[#c0caf5]">
            git clone <span className="text-[#7aa2f7]">https://github.com/rhutiksahu12/portfolio</span>
          </p>
          <p className="ml-4 text-[#c0caf5]">
            My personal portfolio with a terminal-inspired UI, built using React, Tailwind, and Vite.
          </p>
        </div>

        {/* Add more project blocks here as needed */}
      </div>
    </section>
  )
}

export default Projects