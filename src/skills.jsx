import React from 'react'

const Skills = ({skills}) => {
  return (
      <div className="skills-container">
        <h4>Skills</h4>
        <ul className="skills-list">{skills.map(function(skill, index) {
          return <li className="skills-list-item" key={index}>{skill}</li>
        })}
        </ul>
      </div>
    )
}

export default Skills