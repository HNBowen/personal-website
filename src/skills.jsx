import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import skillSet from './skillset.js'

import { resize, createNodes, exitHex, sizeNodes } from './d3helpers.js'
class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  //when the component mounts, draw the hexagons
  componentDidMount() {


    //grab the width and height of the svg-container
    var width = window.innerWidth;
    var height = document.getElementById("svg-container").clientHeight;

    //define the d3 graph selection
    this.d3Graph = d3.select(ReactDOM.findDOMNode(this.refs.svg));
    //size the svg
    this.d3Graph.attr("height", height).attr("width", width)

    //give the skillSet data set its y coordinates
    sizeNodes(skillSet, this.d3Graph[0][0])
    
    //set the resize listener
    d3.select(window).on("resize", () => {
      //calculate new sizes an positions for hexagons
      sizeNodes(skillSet, this.d3Graph[0][0])
      //draw the hexagons 
      resize("svg-container", skillSet)
    })

    //scroll magic controllers and scene
    var skillsCtrl = new ScrollMagic.Controller();

    var skillsScene = new ScrollMagic.Scene({
      triggerElement: "#svg"
    })
      .on('enter', () => {
        //draw and zoom-in hexagons
        createNodes(this.d3Graph, skillSet);
      })
      .on('leave', () => {
        //zoom out hexagons
        exitHex(this.d3Graph)
      })
      .addTo(skillsCtrl)
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