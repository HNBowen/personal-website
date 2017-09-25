import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import skillSet from './skillset.js'

import { node, tick, resize, startForce, fadeInForce } from './d3helpers.js'

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  //when the component mounts, draw the force layout
  componentDidMount() {
    //grab the width and height of the svg-container
    var width = window.innerWidth;
    var height = document.getElementById("svg-container").clientHeight;

    //define the d3 graph selection
    this.d3Graph = d3.select(ReactDOM.findDOMNode(this.refs.svg));
    //size the svg
    this.d3Graph.attr("height", height).attr("width", width)

    //give the skillSet data set its y coordinates
    skillSet[0]['y'] = document.getElementById("svg").clientHeight / 2
    skillSet[1]['y'] = document.getElementById("svg").clientHeight / 2
    skillSet[2]['y'] = document.getElementById("svg").clientHeight / 2


    //call the startForce function
    startForce(this.d3Graph, skillSet, width, height)
      //give it the d3 graph selection
      //give it the skillSet data set
      //give it the width and height of the svg-container

    //set the resize listener
    d3.select(window).on("resize", () => {
      resize("svg-container")
    })

  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <div id="svg-container">
        <svg id="svg" 
          ref="svg" 
        />
      </div>
      )
  }
}

export default Skills