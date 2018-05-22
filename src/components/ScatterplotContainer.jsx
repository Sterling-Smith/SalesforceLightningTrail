import React from "react";
import * as d3 from "d3";
import Scatterplot from "./Scatterplot";

var carClasses = [
  { abbrev: "compact", name: "Compacts"},
  { abbrev: "midsize", name: "Mid-size cars"},
  { abbrev: "suv", name: "SUVs"},
  { abbrev: "2seater", name: "Two-seaters"},
  { abbrev: "minivan", name: "Minivans"},
  { abbrev: "pickup", name: "Pickups"},
  { abbrev: "subcompact", name: "Subcompacts"}
];

class ScatterplotContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentWillMount() {
    const newData = [];
    for (let i = 0; i < 500; i++) {
      newData.push({
        class: '',
        hwy: Math.floor(Math.random() * 30) + 40,
        displ: Math.floor(Math.random() * 100000000) + 1,
      });
    }
    for (let i = 0; i < 400; i++) {
      newData.push({
        class: '',
        hwy: Math.floor(Math.random() * 50) + 30,
        displ: Math.floor(Math.random() * 100000000) + 1,
      });
    }

    for (let i = 0; i < 200; i++) {
      newData.push({
        class: '',
        hwy: Math.floor(Math.random() * 60) + 20,
        displ: Math.floor(Math.random() * 100000000) + 1,
      });
    }

    for (let n = 0; n < 100; n++) {
      newData.push({
        class: '',
        hwy: Math.floor(Math.random() * 100) + 1,
        displ: Math.floor(Math.random() * 100000000) + 1,
      });
    }

    this.setState({ data: newData});
  }
  
  render() {
    var width = 900;
    var height = 500;

    var plots = carClasses.map((carClass, i) => {

      var annotations = getAnnotations(carClass);

      return (
        <div key={i} className="plot" style={{position: "relative"}}>

          <Scatterplot
            width={width}
            height={height}
            marginTop="40"
            marginLeft="40"
            x={d => d.displ}
            y={d => d.hwy}
            r={d => 2}
            fill={d => '#7F7B76'}
            xDomain={[0, 100000000]}
            yDomain={[0, 100]}
            xTickArguments={[5]}
            yTickArguments={[5]}
            data={this.state.data} />
  
          <div style={{position: "absolute", left: 0, top: 0}}>
            {annotations}
          </div>

        </div>
      );
    });

    return (
      <div className="plots">
        {plots[0]}
      </div>
    );
  }
}

function getAnnotations(carClass) {
  return [
    (
      <span
        key="0"
        className="chart-title"
        style={{position: "absolute", left: 25, top: 10, width: 200}}>
        {'Discount %'}
      </span>
    ),
    (
      <span
        key="1"
        className="axis-label"
        style={{position: "absolute", left: 768, top: 447, width: 200}}>
        {'Avg account size'}
      </span>
    ),
    (
      <span
        key="2"
        className="axis-label"
        style={{position: "absolute", left: -100, top: 134, width: 200,
                MsTransform: "rotate(90deg)",
                WebkitTransform: "rotate(90deg)",
                transform: "rotate(90deg)"}}>
        
      </span>
    )
  ];
}

export default ScatterplotContainer;
