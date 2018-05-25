import React, { Component } from 'react';

class RightFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'insights',
      newInsight: false,
      newRec: false,
      newInsightContent: '',
      newRecContent: '',
      insights: [
        'Large set of small customers with low price realization',
        'Main products driving the low price realization in these customers are PPP,UUU,FFF',
        'Product PPP is the largest sales product, having the largest impact in overall price',
      ],
      recs: [
        `Need to explore why Product PPP has lower avg price realization. ~\n
        * Is there a particular competitive situation impacting it? ~\n
        * Is it pricing discipline driven by a sales team? ~\n
        * Is it the list price correctly set?`,
      ]
    }

    this.toggleTabs = this.toggleTabs.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addInsight = this.addInsight.bind(this);
    this.addRec = this.addRec.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  toggleTabs(view) {
    this.setState({
      view: view,
      newInsight: false,
      newRec: false
    })
  }

  addItem() {
    const { view } = this.state;
    if (view === 'insights') {
      this.setState({
        newInsight: true,
        newRec: false
      })
    } else {
      this.setState({
        newInsight: false,
        newRec: true
      })
    }
  }

  addInsight(e) {
    e.preventDefault();

    const newInsights = this.state.insights;
    newInsights.push(this.state.newInsightContent);

    this.setState({
      insights: newInsights,
      newInsight: false,
      newInsightContent: ''
    })
  }

  addRec(e) {
    e.preventDefault
    const newRecs = this.state.recs;
    newRecs.push(this.state.newRecContent);

    this.setState({
      recs: newRecs,
      newRec: false,
      newRecContent: ''
    })
  }

  render() {
    const { view, newInsight, newRec, newInsightContent, newRecContent, insights, recs, insightLength, recLength } = this.state;

    return (
      <div style={container}>
        <div style={feedStyle} className="slds-col slds-size_10-of-12">

          {view === 'insights' &&
            <div>
              <div style={{ marginTop: 25, marginBottom: 25 }}>
                <span style={lightTitle}>INSIGHTS</span>
                <img onClick={this.addItem} style={plusStyle} src="/assets/plus.png" width="17px" height="17px" />
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

              {newInsight &&
                <article className="slds-card" style={cardStyle}>
                  <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                      <div className="slds-media__body">
                        <div className="slds-col slds-size_12-of-12">
                          <textarea
                            rows='2'
                            style={bodyText}
                            placeholder='Add an insight'
                            name='newInsightContent'
                            value={newInsightContent}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="slds-col slds-size_12-of-12">
                          <button
                            className="slds-button slds-button_inverse"
                            onClick={(e) => this.addInsight(e)}
                            style={navButtonStyleSingle}
                          >
                            Add Insight
                          </button>
                        </div>
                      </div>
                    </header>
                  </div>
                </article>
              }
            </div>



          }

          {view === 'recs' &&
            <div>
              <div style={{ marginTop: 25, marginBottom: 25 }}>
                <span style={lightTitle} >RECOMMENDATIONS</span>
                <img onClick={this.addItem} style={plusStyle} src="/assets/plus.png" width="17px" height="17px" />
              </div>

              {recs.slice(0, recLength).map((rec, i) => (
                <article key={`rec-${i}`} className="slds-card" style={cardStyle}>
                  <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                      <div className="slds-media__body">
                        <span className="slds-text-heading_small" style={bodyText}>
                          {rec}
                        </span>
                      </div>
                    </header>
                  </div>
                </article>
              ))}

              {newRec &&
                <article className="slds-card" style={cardStyle}>
                  <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                      <div className="slds-media__body">
                        <div className="slds-col slds-size_12-of-12">
                          <textarea
                            rows='2'
                            style={bodyText}
                            placeholder='Add a recommendation'
                            name='newRecContent'
                            value={newRecContent}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="slds-col slds-size_12-of-12">
                          <button
                            className="slds-button slds-button_inverse"
                            onClick={(e) => this.addRec(e)}
                            style={navButtonStyleSingle}
                          >
                            Add Recommendation
                          </button>
                        </div>
                      </div>
                    </header>
                  </div>
                </article>
              }
            </div>
          }
        </div>

        <div style={tabStyle} className="slds-col slds-size_2-of-12">
          <div onClick={() => this.toggleTabs('insights')}>
            {view === 'insights' ?
              <img src="/assets/Tab_selected.png" width="50px" height="50px" />
              :
              <img src="/assets/Tab_deselected.png" width="50px" height="50px" />
            }
          </div>
          <div onClick={() => this.toggleTabs('recs')}>
            {view === 'recs' ?
              <img src="/assets/Tab_selected.png" width="50px" height="50px" />
              :
              <img src="/assets/Tab_deselected.png" width="50px" height="50px" />
            }
          </div>
        </div>
      </div>
    );
  }
}

const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

const feedStyle = {
  backgroundColor: '#F3F2F0',
  // margin: '0px 5px 5px 5px',
  height: 'calc(100vh - 57px)',
  display: 'flex',
  flexDirection: 'column'
};

const tabStyle = {
  backgroundColor: '#ECEbE9',
  height: 'calc(100vh - 57px)',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 0
}

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

const navButtonStyleSingle = {
  marginTop: 10,
  borderColor: '#48D89E',
  backgroundColor: '#575652'
};



export default RightFeed;

