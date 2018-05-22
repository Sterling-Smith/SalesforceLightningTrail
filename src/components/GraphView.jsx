import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './BarChart';
import ScatterplotContainer from './ScatterplotContainer';
import GraphBar from './GraphBar';

const GraphView = () => (
  <div style={{ backgroundColor: 'white' }}>
    <GraphBar>
        <ScatterplotContainer />
      <div style={{ marginTop: 40, marginLeft: 20}}>
          <BarChart />
      </div>
    </GraphBar>
  </div>
);

export default GraphView;

