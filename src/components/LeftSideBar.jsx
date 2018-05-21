import React from 'react';

const barStyle = {
  backgroundColor: '#F3F2F0',
};

const lightTitle = {
  color: '#CCC7C0',
  marginLeft: '10px',
  fontWeight: 400,
  backgroundColor: '#F3F2F0',
};

const lightTitleMiddle = {
  color: '#CCC7C0',
  marginLeft: '10px',
  fontWeight: 400,
  backgroundColor: '#F3F2F0',
};

const cardStyleDeselected = {
  backgroundColor: '#F9F8F7',
  color: '#CCC7C0',
  marginTop: '0px'
};

const cardStyleSelected = {
  backgroundColor: '#FFF',
  color: 'black',
  marginTop: '0px'
};

const cardText = {
  marginLeft: '50px',
  fontSize: '15px',
  marginTop: '25px',
  height: '40px'
};

const numberStyle ={
  float: 'left',
  marginLeft: '26px',
  marginTop: '25px',
  marginRight: '-27px'
};

const Card = props => (
  <article className="slds-tile slds-media" style={props.cardStyle}>
    <img style={numberStyle} src={props.selected} width="24px" height="24px" />
    <div className="slds-media__body">
      <div className="slds-tile__detail" style={{marginTop: '0px'}}>
        <dl className="slds-list_horizontal slds-wrap">
          <span style={cardText}>{props.cardText}</span>
        </dl>
      </div>
    </div>
  </article>
);

const LeftSideBar = () => (
<div
  className="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open"
  aria-hidden="false"
  style={barStyle}
>
  <div className="slds-panel__body">
    <span style={lightTitle}>DIAGNOSIS </span>
    <img style={{float: 'right'}} src="/assets/left_back.png" width="17px" height="17px" />
  </div>
  <Card cardText="Margin Waterfall" cardStyle={cardStyleDeselected} selected="/assets/deselected_1.png"/>
  <Card cardText="Cloud" cardStyle={cardStyleSelected} selected="/assets/selected_2.png"/>
  <Card cardText="Segmentation" cardStyle={cardStyleDeselected} selected="/assets/deselected_3.png"/>
  <Card cardText="Playbook" cardStyle={cardStyleDeselected} selected="/assets/deselected_4.png"/>
  <Card cardText="Discretion dashboard" cardStyle={cardStyleDeselected} selected="/assets/deselected_5.png"/>
  <div
    className="slds-panel__body"
    style={{
    height: '44px', backgroundColor: '#F3F2F0', marginTop: '2px', paddingBottom: '0px'
  }}
  >
    <span style={lightTitleMiddle}>PRICE SETTING </span>
  </div>
  <Card cardText="Grid price setting" cardStyle={cardStyleDeselected} selected="/assets/deselected_6.png"/>
</div>
);

export default LeftSideBar;
