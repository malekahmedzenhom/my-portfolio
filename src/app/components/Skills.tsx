'use client'
import React from 'react'

type Skill = {
  name: string;
  level: number;
};

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 90 },
    { name: "Next JS", level: 85 },
    { name: "TypeScript", level: 80 },
  ]

  const backendSkills: Skill[] = [
    { name: "Node JS", level: 80 },
    { name: "Express JS", level: 75 },
    { name: "REST APIs", level: 85 },
    { name: "Authentication (JWT)", level: 70 },
  ]

  const databaseSkills: Skill[] = [
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 70 },
    { name: "Git & GitHub", level: 90 },
    { name: "Deployment (Vercel / Render)", level: 75 },
  ]

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{skill.name}</h3>
        <span className="text-green-400 text-sm">{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )

  return (
    <section className="bg-[#020617] text-white py-20 px-4 sm:px-8 md:px-20">
      <h2 className="text-4xl font-bold mb-16 text-center">
        My <span className="text-green-400">Full Stack Skills</span>
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            Frontend Development
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            Backend Development
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            Database & Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {databaseSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills