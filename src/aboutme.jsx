import React from 'react'

class AboutMe extends React.Component {

  componentDidMount() {

    var controller = new ScrollMagic.Controller();

    var aboutMeTween = new TweenMax.to('.about-me', 1.5, {
      opacity: 1
    })

    var scene = new ScrollMagic.Scene({
      triggerElement: ".about-me",
      triggerHook: 0.75,
      reverse: false
    })
    .setTween(aboutMeTween)



    controller.addScene(scene);

  }

  render() {
    return(
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
}



export default AboutMe