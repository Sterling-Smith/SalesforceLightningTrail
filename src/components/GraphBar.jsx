import React from 'react';

const navButtonStyleSingle = {
  margin: '5px 20px 20px 20px',
  width: '60px',
  borderColor: '#48D89E'
};

const navButtonStyleDouble = {
  margin: '5px 20px 20px 20px',
  width: '100px',
  borderColor: '#48D89E'
};

const titleText = {
  color: 'white',
  padding: '17px 0px 17px 95px',
  fontSize: '20px',
};

const GraphBar = (props) => (
  <div>
    <article className="slds-tile slds-media">
    <div className="slds-media__body">
      <div className="slds-tile__detail" style={{marginTop: '0px'}}>

      </div>
    </div>
  </article>
    {props.children}
  </div>
);

export default GraphBar;