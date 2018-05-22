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
  marginLeft: '-46px'
};

const NavBar = (props) => (
  <div>
    <div className="slds-global-header_container" style={{backgroundColor: '#575652'}}>
      <div className="slds-grid slds-gutters">
        <div className="slds-col">
          <img style={{ marginLeft: '23px', marginBottom: '6px'}} src="/assets/chevronleft_single.png" width="20px" height="20px" />
          <span style={titleText}> Discount guidelines Q4 2017</span>
          <button className="slds-button slds-button_inverse" style={navButtonStyleSingle}>EDIT</button>
        </div>
        <div className="slds-col">
          <div className="slds-button-group slds-float_right" align="right" role="group">
            <button className="slds-button slds-button_inverse" style={navButtonStyleDouble}>Export</button>
            <button className="slds-button slds-button_inverse" style={navButtonStyleDouble}>Share</button>
          </div>
        </div>
      </div>
    </div>
    <div style={{marginTop: '57px'}}>
    {props.children}
    </div>
  </div>
);

export default NavBar;
