import React from 'react'
import * as d3 from 'd3'
import hireMeData from './font_to_svg.js';

import { sizeHireMe, hexagon } from './d3helpers.js'

var x, y;

class HireMe extends React.Component {

  componentDidMount() {
    //grab the coordinates of the middle of the svg

    var translateStr = sizeHireMe();
    d3.select(".hire-me-svg").selectAll("path").attr("transform", translateStr)

    var resizeTimer2;
    d3.select(window).on("resize.two", (e) => {
      
      clearTimeout(resizeTimer2);
      resizeTimer2 = setTimeout(() => {
        translateStr = sizeHireMe();
        d3.select(".hire-me-svg").selectAll("path").attr("transform", translateStr)
      }, 250)
    })
  }

  render() {
    return (
      <div className="hire-me">
        <div className="hire-me-svg-wrapper">
          <svg className="hire-me-svg">
            <path d={hireMeData} transform="scale(2,2)" className="hire-me-path"/>
          </svg>
        </div>
        <div className="hire-me-links-container">
          <a href="#"><span className="hb hb-sm"><i className="fa fa-linkedin-square"></i></span></a>
          <a href="#"><span className="hb hb-sm"><i className="fa fa-github-alt"></i></span></a>
          <a href="#"><span className="hb hb-sm"><i className="fa fa-envelope"></i></span></a>
        </div>
      </div>
      )  
  }
}

export default HireMe