import React from 'react'

import Splash from './splash.jsx'
import AboutMe from './aboutme.jsx'
import Skills from './skills.jsx'
import Applications from './applications.jsx'
import HireMe from './hireme.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div id="app">
          <Splash />
          <div id="hank">
            <AboutMe />
            <Skills />
          </div>
          <Applications />
          <HireMe />
        </div>
      )
  }
}
// 
// <Experience />
// <Applications />

module.exports = App