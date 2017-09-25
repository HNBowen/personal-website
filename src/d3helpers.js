import * as d3 from 'd3'

const force = d3.layout.force()
  .gravity(0.5)
  .charge(-1000)

export const startForce = (selection, skills, width, height) => {
  createNodes(selection, skills)
  force.nodes(skills)
    .size([width, height])
    .on('tick', () => { tick(selection) })
    .start();

}

export const createNodes = (selection, skills) =>  {
  selection.selectAll("circle")
  .data(skills).enter().append("circle")
  .attr("r", function(d){return d.width})
  .attr("stroke","black")
  .attr("fill","none")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .call(force.drag)
}

export const tick = function(selection) {
  selection.selectAll("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
}

export const fadeInForce = (node) => {
  node.transition()
    .duration(750)
    .delay(function(d, i) { return i * 5; })
    .attrTween("r", function(d) {
      var i = d3.interpolate(0, d.width);
      return function(t) { return d.width = i(t); };
    });
}

export const resize = (el) => {
  var width = window.innerWidth;
  var height = document.getElementById(el).clientHeight
  console.log(width, height)
  d3.select("svg")
    .attr("width",width)
    .attr("height", height)
  force.size([window.innerWidth, document.getElementById("svg").clientHeight])
  force.resume()
}
