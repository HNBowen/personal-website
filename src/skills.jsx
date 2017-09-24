import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import skillSet from './skillset.js'

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  //when the component mounts, draw the force layout
  componentDidMount() {
    console.log(document.getElementById("svg-container").clientHeight)
    var width = window.innerWidth;
    var height = document.getElementById("svg-container").clientHeight;
    

    skillSet[0]['y'] = document.getElementById("svg").clientHeight / 2
    skillSet[1]['y'] = document.getElementById("svg").clientHeight / 2
    skillSet[2]['y'] = document.getElementById("svg").clientHeight / 2

    var force = d3.layout.force()
      .nodes(skillSet)
      .size([width, height])
      .gravity(0.5)
      .charge(-1000)
      .on("tick", () => { tick() })
      .start()
    this.d3Graph = d3.select(ReactDOM.findDOMNode(this.refs.svg));
    this.d3Graph.attr("height", height).attr("width", width)
    var node = this.d3Graph.selectAll("circle")
      .data(skillSet).enter().append("circle")
      .attr("r", function(d){return d.width})
      .attr("stroke","black")
      .attr("fill","none")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .call(force.drag)

    node.transition()
    .duration(750)
    .delay(function(d, i) { return i * 5; })
    .attrTween("r", function(d) {
      var i = d3.interpolate(0, d.width);
      return function(t) { return d.width = i(t); };
    });

    var tick = function(e) {
      
      node
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        
    }

    d3.select(window).on("resize", () => {
      console.log("resize")
      var width = window.innerWidth;
      var height = document.getElementById("svg-container").clientHeight
      console.log(width, height)
      d3.select("svg")
        .attr("width",width)
        .attr("height", height)
      force.size([window.innerWidth, document.getElementById("svg").clientHeight])
      force.resume()
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