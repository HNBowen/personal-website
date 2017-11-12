import * as d3 from 'd3'

export const hexagon = {
  draw: function(x, y, r) {
    var points = [ [x - r, y], [x - (r/2), y + (r*Math.sqrt(3)/2)], [x + (r/2), y+(r*Math.sqrt(3)/2)], [x+r, y], [x+(r/2),y-(r*Math.sqrt(3)/2)], [x-(r/2),y-(r*Math.sqrt(3)/2)], [x-r,y] ];
    return d3.svg.line()(points);
  }
}

export const createNodes = (selection, skills) =>  {

  console.log('drawing hexagons')
  selection.selectAll("path, rect").remove()
  
  selection.selectAll(/*"circle"*/"path")
  .data(skills).enter()
  .append(/*"circle"*/"svg:path")
  .attr("id", (d) => d.id)
  .attr("stroke","white")
  .attr("fill", (d) => {
    if (d.id === "0") {
      return "url(#" + d.label + ")"
    } else {
      return "white"
    }
  })
  .transition()
  .duration(750)
  .delay(function(d, i) { return i * 200; })
  .attrTween("d", function(d) {
    var i = d3.interpolate(0, d.hexRad);
    return function(t) { return hexagon.draw(d.x, d.y, i(t)); };
  })

  selection.selectAll("rect")
    .data(skills).enter()
    .append("rect")
    .attr("stroke", "none")
    .attr("fill", (d) => {
      if (d.id !== "0") {
        return "url(#" + d.label + ")";
      } else {
        return "none"
      }
    })
    .transition()
    .duration(750)
    .delay(function(d, i) { return i * 200; })
    .attrTween("width", function(d) {
      var i = d3.interpolate(0, d.hexRad);
      return function(t) { return i(t)*(0.75)*Math.sqrt(2); };
    })
    .attrTween("height", function(d) {
      var i = d3.interpolate(0, d.hexRad);
      return function(t) { return i(t)*(0.75)*Math.sqrt(2); };
    })
    .attrTween("x", function(d) {
      var i = d3.interpolate(0, d.hexRad);
      return function(t) { return d.x - i(t)*(3/8)*Math.sqrt(2); };
    })
    .attrTween("y", function(d) {
      var i = d3.interpolate(0, d.hexRad);
      return function(t) { return d.y - i(t)*(3/8)*Math.sqrt(2); };
    })
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
  var theta = 2*Math.PI / 10;

  console.log('container: ', container)
  data[0]['hexRad'] = height / 5
  data[1]['hexRad'] = height / 10
  data[2]['hexRad'] = height / 10
  data[3]['hexRad'] = height / 10
  data[4]['hexRad'] = height / 10
  data[5]['hexRad'] = height / 10
  data[6]['hexRad'] = height / 10
  data[7]['hexRad'] = height / 10
  data[8]['hexRad'] = height / 10
  data[9]['hexRad'] = height / 10
  data[10]['hexRad'] = height / 10

  var R = data[0]['hexRad'] + (height / 16) + data[1]['hexRad'];

  data[0]['x'] = width / 2
  data[0]['y'] = height / 2

  data[1]['x'] = width / 2 + radCoords(R, theta)['x'];
  data[1]['y'] = height / 2 + radCoords(R, theta)['y'];

  data[2]['x'] = width / 2 + radCoords(R, theta*2)['x'];
  data[2]['y'] = height / 2 + radCoords(R, theta*2)['y']; 

  data[3]['x'] = width / 2 + radCoords(R, theta*3)['x'];
  data[3]['y'] = height / 2 + radCoords(R, theta*3)['y'];

  data[4]['x'] = width / 2 + radCoords(R, theta*4)['x'];
  data[4]['y'] = height / 2 + radCoords(R, theta*4)['y'];

  data[5]['x'] = width / 2 + radCoords(R, theta*5)['x'];
  data[5]['y'] = height / 2 + radCoords(R, theta*5)['y'];

  data[6]['x'] = width / 2 + radCoords(R, theta*6)['x'];
  data[6]['y'] = height / 2 + radCoords(R, theta*6)['y'];

  data[7]['x'] = width / 2 + radCoords(R, theta*7)['x'];
  data[7]['y'] = height / 2 + radCoords(R, theta*7)['y'];

  data[8]['x'] = width / 2 + radCoords(R, theta*8)['x'];
  data[8]['y'] = height / 2 + radCoords(R, theta*8)['y'];

  data[9]['x'] = width / 2 + radCoords(R, theta*9)['x']
  data[9]['y'] = height / 2 + radCoords(R, theta*9)['y'];

  data[10]['x'] = width / 2 + radCoords(R, theta*10)['x']
  data[10]['y'] = height / 2 + radCoords(R, theta*10)['y'];

  console.log('updated data: ', data)
}

//helper function to calculate center coordinates of hexagons
const radCoords = (radius, theta) => {
  var x, y
  x = radius * Math.cos(theta);
  y = radius * Math.sin(theta);
  return {'x': x, 'y': y}
}

export const sizeHireMe = () => {
  var width = document.getElementById("hire-me-svg-wrapper").clientWidth
  var height = document.getElementById("hire-me-svg-wrapper").clientHeight

  console.log(width)

  var tw, th, scale;

  if (width > 812) {
    scale = "scale(3,3)"
    tw = 749.25;
    th = 162.84;
  } else if (width <= 812 && width >= 414) {
    scale = "scale(1.5,1.5)";
    tw = 374.63;
    th = 81.42;
    
  } else {
    scale = "scale(1,1)";
    tw = 249.75;
    th = 54.82;
  }

  var x = width/2 - tw/2; 
  var y = height/2 + th/2;

  var translateStr = "translate(" + x + "," + y + ")" + scale;

  return translateStr;
}


