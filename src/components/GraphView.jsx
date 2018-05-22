import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './BarChart';
import ScatterplotContainer from './ScatterplotContainer';
import GraphBar from './GraphBar';

const GraphView = () => (
  <div>
    <GraphBar>
      <div style={{marginLeft:'40px'}}>
        <ScatterplotContainer />
        <div style={{ marginTop: 40 }}>
          <BarChart />
        </div>
      </div>
    </GraphBar>
  </div>
);

export default GraphView;
