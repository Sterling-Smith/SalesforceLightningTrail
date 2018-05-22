import React from 'react';
import LeftSideBar from './LeftSideBar';
import GraphView from './GraphView';
import RightFeed from './RightFeed';

const MainView = () => (
  <div className="slds-grid slds-gutters" style={{backgroundColor: 'white'}}>
    <div className="slds-col slds-size_9-of-12">
      <LeftSideBar />
    </div>
    <div className="slds-col slds-size_2-of-12" style={{paddingRight: '0px', width: '21%'}}>
      <RightFeed />
    </div>
    <div className="slds-col slds-size_2-of-12"
      style={{
        backgroundColor: '#ECEbE9', paddingLeft: '0px', marginLeft: '-5px', width: '50px'
      }}>
      <div>
        <img src="/assets/Tab_selected.png" width="50px" height="50px" />
      </div>
      <div>
        <img src="/assets/Tab_deselected.png" width="50px" height="50px" />
      </div>
    </div>
  </div>
);

export default MainView;

