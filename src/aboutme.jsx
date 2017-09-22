import React from 'react'

const AboutMe = () => {
  return (
      <div className = 'about-me'>
        <div className="about-me-img-container">
          <img src="src/assets/profile.jpg" alt="me" className="about-me-img"/>
        </div>
        <p className="about-me-text">
          readme.md
          <br/>
          <br />
          My name is Hank Bowen.<br/>
          <br />  
          I am a full-stack software engineer based in Austin, TX who is passionate about creating functional, useful and beautiful applications.
          <br />
          <br />
          I bring an eye for design, insatiable curiosity, and a commitment to collaboration to my work as a coder.  
        </p>
      </div>
    )
}



export default AboutMe