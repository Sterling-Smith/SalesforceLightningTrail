import React from 'react';

const feedStyle = {
  backgroundColor: '#F3F2F0',
  margin: '0px 5px 5px 5px',
  paddingBottom: '100%',
  height: '100%'
};

const cardStyle = {
  margin: '10px',
};

const lightTitle = {
  color: '#A6A29C',
  marginLeft: '10px',
  paddingTop: '20px'
};

const plusStyle ={
  float: 'right',
  marginRight: '12px'
};
const bodyText = {
  color: '#A4A09B',
};
const RightFeed = () => (
  <div style={feedStyle}>
    <div style={{paddingTop: '15px'}}>
      <span style={lightTitle}>INSIGHTS</span> 
      <img style={plusStyle} src="/assets/plus.png" width="17px" height="17px" />
    </div>
    <article className="slds-card" style={cardStyle}>
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <span className="slds-text-heading_small" style={bodyText}>
            Large set of small customers with low price realization
            </span>
          </div>
        </header>
      </div>
    </article>
    <article className="slds-card" style={cardStyle}>
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <span className="slds-text-heading_small" style={bodyText}>
            Main products driving the low price realization in these customers are PPP,UUU,FFF
            </span>
          </div>
        </header>
      </div>
    </article>
    <article className="slds-card" style={cardStyle}>
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <span className="slds-text-heading_small" style={bodyText}>Product PPP is the largest sales product, having
            the largest impact in overall price
            </span>
          </div>
        </header>
      </div>
    </article>
    <hr />
    <div style={{marginTop: '15px'}}>
      <span style={lightTitle} >RECOMMENDATIONS</span>
      <img style={plusStyle} src="/assets/plus.png" width="17px" height="17px"  />
    </div>
    <article className="slds-card" style={cardStyle}>
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <span className="slds-text-heading_small" style={bodyText}>Need to explore why Product PPP has lower avg price
            realization. <br/>
            * Is there a particular competitive situation impacting it? <br/>
            * Is it pricing discipline driven by a sales team? <br/>
            * Is it the list price correctly set? <br/>
            </span>
          </div>
        </header>
      </div>
    </article>
  </div>
);

export default RightFeed;

