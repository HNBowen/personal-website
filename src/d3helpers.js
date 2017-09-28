import * as d3 from 'd3'

const hexagon = {
  draw: function(x, y, r) {
    var points = [ [x - r, y], [x - (r/2), y + (r*Math.sqrt(3)/2)], [x + (r/2), y+(r*Math.sqrt(3)/2)], [x+r, y], [x+(r/2),y-(r*Math.sqrt(3)/2)], [x-(r/2),y-(r*Math.sqrt(3)/2)], [x-r,y] ];
    return d3.svg.line()(points);
  }
}


export const exitHex = (selection) => {
  
  selection.selectAll(/*"circle"*/"path")
    .transition()
    .duration(750)
    .delay(function(d, i) { return i * 5; })
    .attrTween("d", function(d) {
      var i = d3.interpolate(d.hexRad, 0);
      return function(t) { return hexagon.draw(d.x, d.y, i(t)); };
    })
    .remove()
};

export const createNodes = (selection, skills) =>  {
  
  selection.selectAll(/*"circle"*/"path")
  .data(skills).enter().append(/*"circle"*/"svg:path")
  .attr("stroke","black")
  .attr("fill","none")
  .transition()
  .duration(750)
  .delay(function(d, i) { return i * 5; })
  .attrTween("d", function(d) {
    var i = d3.interpolate(0, d.hexRad);
    return function(t) { return hexagon.draw(d.x, d.y, i(t)); };
  });
}

export const resize = (el, data) => {
  var width = document.getElementById(el).clientWidth;
  var height = document.getElementById(el).clientHeight
  console.log(width, height)
  d3.select("svg")
    .attr("width",width)
    .attr("height", height)
}

export const sizeNodes = (data, container) => {

  var height = container.clientHeight
  var width = container.clientWidth
  console.log('container: ', container)
  data[0]['hexRad'] = height / 4
  data[1]['hexRad'] = height / 16
  data[2]['hexRad'] = height / 16

  var centerHexRad = data[0]['hexRad']

  data[0]['y'] = height / 2
  data[1]['y'] = height / 2
  data[2]['y'] = height / 2

  //each hexagons x-coordinate is dependent upon the center hexagons radius and its own radius
  data[0]['x'] = width / 2
  data[1]['x'] = (width / 2) - (centerHexRad) - (height / 16) - data[1]['hexRad']
  data[2]['x'] = (width/2) + centerHexRad + (height /16) + data[2]['hexRad']

  console.log('updated data: ', data)
}
