import * as d3 from 'd3'

const force = d3.layout.force()
  .gravity(0.5)
  .charge(-1000)

const hexagon = {
  draw: function(x, y, r) {
    var points = [ [x - r, y], [x - (r/2), y + (r*Math.sqrt(3)/2)], [x + (r/2), y+(r*Math.sqrt(3)/2)], [x+r, y], [x+(r/2),y-(r*Math.sqrt(3)/2)], [x-(r/2),y-(r*Math.sqrt(3)/2)], [x-r,y] ];
    return d3.svg.line()(points);
  }
}

export const startForce = (selection, skills, width, height) => {
  
  createNodes(selection, skills)
  force.nodes(skills)
    .size([width, height])
    .on('tick', () => { tick(selection) })
    .start();

}

export const endForce = (selection) => {
  force.stop()
  selection.selectAll(/*"circle"*/"path")
    .transition()
    .duration(750)
    .delay(function(d, i) { return i * 5; })
    .attrTween("d", function(d) {
      var i = d3.interpolate(d.width, 0);
      return function(t) { return hexagon.draw(d.x, d.y, i(t)); };
    })
    .remove();
};

export const createNodes = (selection, skills) =>  {
  
  selection.selectAll(/*"circle"*/"path")
  .data(skills).enter().append(/*"circle"*/"svg:path")
  //.attr("d", function(d){return hexagon.draw(d.x, d.y, d.hexRad)})
  .attr("stroke","black")
  .attr("fill","none")
  // .attr("cx", (d) => d.x)
  // .attr("cy", (d) => d.y)
  .call(force.drag)
  .transition()
  .duration(750)
  .delay(function(d, i) { return i * 5; })
  .attrTween("d", function(d) {
    var i = d3.interpolate(0, d.hexRad);
    return function(t) { return hexagon.draw(d.x, d.y, i(t)); };
  });
}

export const tick = function(selection) {
  selection.selectAll(/*"circle"*/"path")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
}

export const fadeInForce = (selection) => {
  selection.selectAll(/*"circle"*/"path").transition()
  .duration(750)
  .delay(function(d, i) { return i * 5; })
  .attrTween("r", function(d) {
    var i = d3.interpolate(0, d.width);
    return function(t) { return d.width = i(t); };
  });
}

export const fadeOutForce = (selection) => {
  selection.selectAll(/*"circle"*/"path").transition()
    .duration(750)
    .delay(function(d, i) { return i * 5; })
    .attrTween("r", function(d) {
      var i = d3.interpolate(d.width, 0);
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
