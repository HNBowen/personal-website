import React from 'react'

const Experience = () => {
  return (
      <div className="experience-container">
        <h4>Experience</h4>
        <article className="experience-item">Hack Reactor
          <img className="experience-img" src="src/assets/hr.jpeg" alt="HackReactor" />
          <ul className="experience-list">
            <li>JavaScript Immersive</li>
            <li>3-month post-graudation residency</li>
          </ul>
        </article>
        <article className="experience-item">University of New Hampshire
          <img className="experience-img" src="src/assets/unh.png" alt="UNH" />
          <ul className="experience-list">
            <li>B.S. Physics</li>
            <li>International Affiars Dual Major</li>
            <li>French minor</li>
          </ul>
        </article>
      </div>
    )
}

export default Experience