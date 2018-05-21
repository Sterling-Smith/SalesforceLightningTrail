import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this);
   }
   componentDidMount() {
      this.createBarChart();
   }
   componentDidUpdate() {
      this.createBarChart();
   }
   createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 700- margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    /*const yScale = scaleLinear()
       .domain([0, dataMax])
       .range([0, this.props.size[1]]);*/

    const yScale = scaleLinear()
        .range([height,1])
        .domain([35,1]);

    const xScale = scaleLinear()
        .range([0, width + margin.left + (margin.right * 2)])
        .domain([2400,2210]);

    select(node)
      .attr("width",width + margin.right + margin.left + margin.right + margin.left + 100)
      .attr("height",height + margin.top + (margin.bottom * 2));

     const xAxis = axisBottom()
      .scale(xScale);

     const yAxis = axisLeft()
      .scale(yScale);
          
     select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    select(node).selectAll("g")
      .data(this.props.data)
      .enter().append("g")
      .attr("transform", function() {
         return "translate(" + margin.left +"," + margin.top + ")";
      });
     
     select(node).append("circle")
      .attr("r", 4)
      .attr("fill", function(d,i) { 
     
       
      });

     select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();
     
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);
   }
render() {
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}
export default BarChart;
