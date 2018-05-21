import React from 'react';
import LeftSideBar from './LeftSideBar';
import GraphView from './GraphView';
import RightFeed from './RightFeed';

const MainView = () => (
  <div className="slds-grid slds-gutters">
    <div className="slds-col slds-size_3-of-12">
      <LeftSideBar />
    </div>
    <div className="slds-col slds-size_7-of-12">
      <GraphView />
    </div>
    <div className="slds-col slds-size_2-of-12">
      <RightFeed />
    </div>
  </div>
);

export default MainView;
