import * as d3 from 'd3'

const force = d3.layout.force()
  .gravity(0.5)
  .charge(-1000)

  const hexagon = {
    draw: function(height, width) {
      var points = [ [width/2 - 24, height/2], [], pt2, pt3, pt4, pt5, start ];
      return d3.svg.line()(points);
    }
  }

export const startForce = (selection, skills, width, height) => {
  console.log('inside startForce')
  createNodes(selection, skills)
  force.nodes(skills)
    .size([width, height])
    .on('tick', () => { tick(selection) })
    .start();

}

export const endForce = (selection) => {
  force.stop()
  selection.selectAll("circle")
    .transition()
    .duration(750)
    .delay(function(d, i) { console.log("endForce delay"); return i * 5; })
    .attrTween("r", function(d) {
      var i = d3.interpolate(d.width, 0);
      return function(t) { return i(t); };
    })
    .remove();
};

export const createNodes = (selection, skills) =>  {
  console.log('inside createNodes')
  selection.selectAll("circle"/*"path"*/)
  .data(skills).enter().append("circle"/*svg:path*/)
  // .attr("r", function(d){return d.width})
  .attr("stroke","black")
  .attr("fill","none")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .call(force.drag)
  .transition()
  .duration(750)
  .delay(function(d, i) { console.log("i", i); return i * 5; })
  .attrTween("r", function(d) {
    
    console.log("d.width: ", d.width)
    var i = d3.interpolate(0, d.width);
    return function(t) { return i(t); };
  });
}

export const tick = function(selection) {
  selection.selectAll("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
}

export const fadeInForce = (selection) => {
  selection.selectAll("circle").transition()
  .duration(750)
  .delay(function(d, i) { return i * 5; })
  .attrTween("r", function(d) {
    var i = d3.interpolate(0, d.width);
    return function(t) { return d.width = i(t); };
  });
}

export const fadeOutForce = (selection) => {
  selection.selectAll("circle").transition()
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
