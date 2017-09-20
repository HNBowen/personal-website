import React from 'react'

const Skills = ({skills}) => {
  return (
      <div className="skills-container">
        <h4>Skills</h4>
        <div className="skills-list">{skills.map(function(skill, index) {
          return <div className="skills-list-item" key={index}>{skill}</div>
        })}
        </div>
      </div>
    )
}

export default Skills