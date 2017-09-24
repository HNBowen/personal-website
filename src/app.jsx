import React from 'react'

import Splash from './splash.jsx'
import AboutMe from './aboutme.jsx'
import Skills from './skills.jsx'
import Experience from './experience.jsx'
import Applications from './applications.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div id="app">
          <Splash />
          <AboutMe />
          <Skills skills={['JS', 'Node & Express', 'React', 'AngularJS', 'D3', 'MongoDB', 'HTML & CSS']} />
        </div>
      )
  }
}
// 
// <Experience />
// <Applications />

module.exports = App