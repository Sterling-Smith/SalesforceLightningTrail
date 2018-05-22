import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './BarChart';
import ScatterplotContainer from './ScatterplotContainer';
import GraphBar from './GraphBar';

const GraphView = () => (
  <div style={{marginLeft: '50px', backgroundColor: 'white'}}>
    <GraphBar>
      <div style={{marginLeft: '50px'}}>
        <ScatterplotContainer />
      <div style={{ marginTop: 40 }}>
          <BarChart />
      </div>
      </div>
    </GraphBar>
  </div>
);

export default GraphView;
