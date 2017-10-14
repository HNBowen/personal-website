import React from 'react'
import * as d3 from 'd3'
import hireMeData from './font_to_svg.js';

var x, y;

class HireMe extends React.Component {

  componentDidMount() {
    //grab the coordinates of the middle of the svg
    var width = document.getElementsByClassName("hire-me-svg-wrapper")[0].clientWidth
    var height = document.getElementsByClassName("hire-me-svg-wrapper")[0].clientHeight

    var tw = 292.79;
    var th = 84.06;

    x = width/2 - tw/2; 
    y = height/2 + th/2;

    var translateStr = "translate(" + x + "," + y + ") scale(1.5,1.5)";
    d3.select(".hire-me-svg").selectAll("path").attr("transform", translateStr)

    var resizeTimer2;
    // d3.select(window).on("resize", () => {
      
    //   clearTimeout(resizeTimer2);
    //   resizeTimer2 = setTimeout(() => {
    //     console.log('resize finished')
    //     var width = document.getElementsByClassName("hire-me-svg-wrapper")[0].clientWidth
    //     var height = document.getElementsByClassName("hire-me-svg-wrapper")[0].clientHeight

    //     var tw = 292.79;
    //     var th = 84.06;

    //     x = width/2 - tw/2; 
    //     y = height/2 + th/2;

    //     var translateStr = "translate(" + x + "," + y + ") scale(1.5,1.5)";
    //     d3.select(".hire-me-svg").selectAll("path").attr("transform", translateStr)
    //   }, 250)
    // })
  }

  render() {
    return (
      <div className="hire-me">
        <div className="hire-me-svg-wrapper">
          <svg className="hire-me-svg">
            <path d={hireMeData} transform="scale(2,2)" className="hire-me-path"/>
          </svg>
        </div>
      </div>
      )  
  }
}

export default HireMe