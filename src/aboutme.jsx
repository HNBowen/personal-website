import React from 'react'

class AboutMe extends React.Component {

  componentDidMount() {

    var controller = new ScrollMagic.Controller();

    var aboutMeTweenEnter = new TweenMax.to('.about-me-text', 1.5, {
      opacity: 1
    })

    var aboutMeTweenExit = new TweenMax.to('.about-me-text', 1.5, {
      opacity: 0
    })

    var scene = new ScrollMagic.Scene({
      triggerElement: ".about-me-text",
      triggerHook: 0.75,
      reverse: true
    })
    .setTween(aboutMeTweenEnter)
    



    controller.addScene(scene);

  }

  render() {
    return(
      <div className = 'about-me'>
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