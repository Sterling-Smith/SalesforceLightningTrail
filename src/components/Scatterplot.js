import React from 'react';
import * as d3 from 'd3';
import Points from './Points';
import Axis from './Axis';

class Scatterplot extends React.Component {
  render() {
    var innerWidth = this.props.width - this.props.marginLeft - this.props.marginRight;
    var innerHeight = this.props.height - this.props.marginTop - this.props.marginBottom;
    var innerTransform = `translate(${this.props.marginLeft},${this.props.marginTop})`;

    var xDomain = this.props.xDomain || d3.extent(this.props.data, this.props.x);
    var yDomain = this.props.yDomain || d3.extent(this.props.data, this.props.y);

    var xScale = d3.scaleLinear()
      .domain(xDomain)
      .range([0, innerWidth]);
    
    var yScale = d3.scaleLinear()
      .domain(yDomain)
      .range([innerHeight, 0]);
    
    var xValue = d => xScale(this.props.x(d));
    var yValue = d => yScale(this.props.y(d));
    var rValue = d => this.props.r(d);
    var fillValue = d => this.props.fill(d);
    var strokeValue = d => this.props.stroke(d);

    var pointsData = this.props.data.map(d => {
      return {
        x: xValue(d),
        y: yValue(d),
        r: rValue(d),
        fill: fillValue(d),
        stroke: strokeValue(d)
      };
    });

    var bottomAxisTransform = `translate(0,${innerHeight})`;
 
    return (
      <svg
        className="Scatterplot"
        width={this.props.width}
        height={this.props.height}>
        <g transform={innerTransform}>
          <Points data={pointsData} />
          <g transform={bottomAxisTransform}>
            <Axis
              orientation="bottom"
              scale={xScale}
              format={null}
              tickArguments={this.props.xTickArguments}/>
          </g>
          <Axis
            orientation="left"
            scale={yScale}
            format={d => d + "%"}
            tickArguments={this.props.yTickArguments} />
        </g>
      </svg>
    );
  }
}

/*
Scatterplot.propType = {
  marginTop: React.PropTypes.number,
  marginLeft: React.PropTypes.number,
  marginBottom: React.PropTypes.number,
  marginRight: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  x: React.PropTypes.func,
  y: React.PropTypes.func,
  r: React.PropTypes.func,
  fill: React.PropTypes.func,
  stroke: React.PropTypes.func,
  xDomain: React.PropTypes.number,
  yDomain: React.PropTypes.number,
  xTickArguments: React.PropTypes.array,
  yTickArguments: React.PropTypes.array,
  data: React.PropTypes.array.isRequired
};*/

Scatterplot.defaultProps = {
  marginTop: 10,
  marginLeft: 30,
  marginBottom: 30,
  marginRight: 30,
  width: 960,
  height: 500,
  x: d => d.x,
  y: d => d.y,
  r: d => 3,
  fill: d => "#000000",
  stroke: d => "none",
  xTickArguments: [],
  yTickArguments: []
};

export default Scatterplot;
