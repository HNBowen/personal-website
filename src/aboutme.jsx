import React from 'react'

class AboutMe extends React.Component {

  componentDidMount() {

    var controller = new ScrollMagic.Controller();

    var aboutMeTweenEnter = new TweenMax.to('.aboutTween', 1.5, {
      opacity: 1
    })

    var aboutMeTweenExit = new TweenMax.to('.aboutTween', 1.5, {
      opacity: 0
    })

    var scene = new ScrollMagic.Scene({
      triggerElement: ".aboutTween",
      triggerHook: 0.75,
      reverse: false
    })
    .setTween(aboutMeTweenEnter)
    



    controller.addScene(scene);

  }

  render() {
    return(
      <div className = 'about-me'>
        <div className="about-me-blurb">
          <p className="about-me-text aboutTween">
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
        <div className="about-me-skills">
          <p className="about-me-text-skills aboutTween">
            frontend.js
            <br />
            <br />
            ReactJS
            <br/>
            AngularJS
            <br/>
            Redux
            <br />
            jQuery
            <br />
            d3.js
            <br />
            HTML5
            <br/>
            CSS
            <br />
          </p>
          <p className="about-me-text-skills aboutTween">
            backend.js
            <br />
            <br />
            NodeJS
            <br/>
            Express
            <br/>
            mySQL
            <br />
            mongoDB
            <br />
          </p>
        </div>
      </div>
    )
  }
}



export default AboutMe