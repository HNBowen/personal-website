import React from 'react'

import Splash from './splash.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <Splash />
        </div>
      )
  }
}

module.exports = App