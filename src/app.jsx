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
          
        </div>
      )
  }
}
// <AboutMe />
// <Skills skills={['JS', 'Node & Express', 'React', 'Angular', 'D3', 'MongoDB', 'HTML & CSS']} />
// <Experience />
// <Applications />

module.exports = App