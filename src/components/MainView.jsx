import React from 'react';
import LeftSideBar from './LeftSideBar';
import GraphView from './GraphView';
import RightFeed from './RightFeed';

const MainView = () => (
  <div className="slds-grid slds-gutters" style={{backgroundColor: 'white'}}>
    <div className="slds-col slds-size_9-of-12">
      <LeftSideBar />
    </div>
    <div className="slds-col slds-size_3-of-12" style={{paddingRight: '0px' }}>
      <RightFeed />
    </div>
{/*     <div className="slds-col slds-size_1-of-12"
      style={{
        backgroundColor: '#ECEbE9', paddingLeft: '0px', marginLeft: '-5px'
      }}>
      <div>
        <img src="/assets/Tab_selected.png" width="50px" height="50px" />
      </div>
      <div>
        <img src="/assets/Tab_deselected.png" width="50px" height="50px" />
      </div>
    </div> */}
  </div>
);

export default MainView;

