import React, { Component } from 'react';

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

const plusStyle = {
  float: 'right',
  marginRight: '12px'
};
const bodyText = {
  color: '#A4A09B',
};


const insights = [
  'Large set of small customers with low price realization',
  'Main products driving the low price realization in these customers are PPP,UUU,FFF',
  'Product PPP is the largest sales product, having the largest impact in overall price',
  'Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
  'User generated content in real-time will have multiple touchpoints for offshoring.'
]

const recommendations = [
  `Need to explore why Product PPP has lower avg price realization. ~\n
            * Is there a particular competitive situation impacting it? ~\n
            * Is it pricing discipline driven by a sales team? ~\n
            * Is it the list price correctly set?`,
  'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
  'Override the digital divide with additional clickthroughs from DevOps.',
  'Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
]

class RightFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insightLength: 1,
      recLength: 1
    }

    this.addInsight = this.addInsight.bind(this);
    this.addRec = this.addRec.bind(this);
  }

  addInsight() {
    console.log('ins')
    const { insightLength } = this.state;

    this.setState({
      insightLength: insightLength + 1
    });
  }

  addRec() {
    const { recLength } = this.state;

    this.setState({
      recLength: recLength + 1
    });
  }

  render() {
    const { insightLength, recLength } = this.state;

    return (
      <div style={feedStyle}>
        <div style={{ paddingTop: '15px' }}>
          <span style={lightTitle}>INSIGHTS</span>
          <img onClick={this.addInsight} style={plusStyle} src="/assets/plus.png" width="17px" height="17px" />
        </div>

        {insights.slice(0, insightLength).map((insight, i) => (
          <article key={`insight-${i}`} className="slds-card" style={cardStyle}>
            <div className="slds-card__header slds-grid">
              <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__body">
                  <span className="slds-text-heading_small" style={bodyText}>
                    {insight}
                  </span>
                </div>
              </header>
            </div>
          </article>
        ))}

        <hr />

        <div style={{ marginTop: '15px' }}>
          <span style={lightTitle} >RECOMMENDATIONS</span>
          <img onClick={this.addRec} style={plusStyle} src="/assets/plus.png" width="17px" height="17px" />
        </div>

        {recommendations.slice(0, recLength).map((recommendation, i) => (
          <article key={`rec-${i}`} className="slds-card" style={cardStyle}>
            <div className="slds-card__header slds-grid">
              <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__body">
                  <span className="slds-text-heading_small" style={bodyText}>
                    {recommendation}
                  </span>
                </div>
              </header>
            </div>
          </article>
        ))}

      </div>
    );
  }
}



export default RightFeed;
