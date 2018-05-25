
import React, { Component } from 'react';
import GraphView from './GraphView';
import TempView from './TempView';

const barStyle = {
  backgroundColor: '#F3F2F0',
  paddingBottom: '473px',
  height: 'calc(100vh - 57px)',
};

const barStyleClosed = {
  backgroundColor: '#F3F2F0',
  paddingBottom: '951px',
  width: '60px',
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

const cardStyleDeselectedLast = {
  backgroundColor: '#F9F8F7',
  color: '#CCC7C0',
  marginTop: '0px',
  marginBottom: -2
};

const cardStyleClosed = {
  backgroundColor: '#F3F2F0',
  color: '#CCC7C0',
  marginTop: '0px',
  marginLeft: -20
};

const cardStyleSelected = {
  backgroundColor: '#FFF',
  color: 'black',
  marginTop: '1px',
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  borderBottom: '1px solid #E1E1E0'
};

const cardStyleSelectedLast = {
  backgroundColor: '#FFF',
  color: 'black',
  marginTop: '1px',
  marginBottom: -2,
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  borderBottom: '2px solid #E1E1E0'
};

const cardText = {
  marginLeft: '50px',
  fontSize: '15px',
  marginTop: '25px',
  height: '40px'
};

const numberStyle = {
  float: 'left',
  marginLeft: '26px',
  marginTop: '25px',
  marginRight: '-27px'
};


const Card = props => (
  <article className="slds-tile slds-media" style={props.cardStyle} onClick={() => props.onClick(props.value)}>
    <img style={numberStyle} src={props.selected} width="24px" height="24px" />
    <div className="slds-media__body">
      <div className="slds-tile__detail" style={{ marginTop: '0px' }}>
        <dl className="slds-list_horizontal slds-wrap">
          <span style={cardText}>{props.cardText}</span>
        </dl>
      </div>
    </div>
  </article>
);

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      panelClosed: false,
    };

    this.handleSelected = this.handleSelected.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  handleSelected(value) {
    this.setState({ selected: value });
  }

  togglePanel() {
    const { panelClosed } = this.state;
    this.setState({ panelClosed: !panelClosed });
  }

  render() {
    const { selected, panelClosed } = this.state;

    return (
      <div className="slds-grid slds-gutters" style={{ zIndex: 2 }}>
        <div className="slds-col slds-size_3-of-12">
          <div
            className={
              panelClosed ? "slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-closed" :
                "slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open"}
            // className={"slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open"}
            aria-hidden="false"
            style={barStyle}
          >
            <div className="slds-panel__body">
              <span style={lightTitle}>DIAGNOSIS </span>
              <img onClick={this.togglePanel} style={{ float: 'right' }} src="/assets/left_back.png" width="17px" height="17px" />
            </div>
            <Card
              onClick={this.handleSelected}
              value={0}
              cardText="Margin Waterfall"
              cardStyle={selected === 0 ? cardStyleSelected : cardStyleDeselected}
              selected={selected === 0 ? '/assets/selected_1.png' : '/assets/deselected_1.png'}
            />
            <Card
              onClick={this.handleSelected}
              value={1}
              cardText="Cloud"
              cardStyle={selected === 1 ? cardStyleSelected : cardStyleDeselected}
              selected={selected === 1 ? '/assets/selected_2.png' : '/assets/deselected_2.png'}
            />
            <Card
              onClick={this.handleSelected}
              value={2}
              cardText="Segmentation"
              cardStyle={selected === 2 ? cardStyleSelected : cardStyleDeselected}
              selected={selected === 2 ? '/assets/selected_3.png' : '/assets/deselected_3.png'}
            />
            <Card
              onClick={this.handleSelected}
              value={3}
              cardText="Playbook"
              cardStyle={selected === 3 ? cardStyleSelected : cardStyleDeselected}
              selected={selected === 3 ? '/assets/selected_4.png' : '/assets/deselected_4.png'}
            />
            <Card
              onClick={this.handleSelected}
              value={4}
              cardText="Discretion dashboard"
              cardStyle={selected === 4 ? cardStyleSelectedLast : cardStyleDeselectedLast}
              selected={selected === 4 ? '/assets/selected_5.png' : '/assets/deselected_5.png'}
            />
            <div
              className="slds-panel__body"
              style={{
                height: '44px', backgroundColor: '#F3F2F0', marginTop: '2px', paddingBottom: '0px'
              }}
            >
              <span style={lightTitleMiddle}>PRICE SETTING </span>
            </div>
            <Card
              onClick={this.handleSelected}
              value={5}
              cardText="Grid price setting"
              cardStyle={selected === 5 ? cardStyleSelected : cardStyleDeselected}
              selected={selected === 5 ? '/assets/selected_6.png' : '/assets/deselected_6.png'}
            />
          </div>
          {panelClosed &&
            <div>
              <div className="slds-panel__body" style={barStyleClosed}>
                <div style={{ minHeight: 32 }}>
                  <img onClick={this.togglePanel} style={{ float: 'right', transform: "scaleX(-1)" }} src="/assets/left_back.png" width="17px" height="17px" />
                </div>

                <Card
                  onClick={this.handleSelected}
                  value={0}
                  cardStyle={cardStyleClosed}
                  selected={selected === 0 ? '/assets/selected_1.png' : '/assets/deselected_1.png'}
                />
                <Card
                  onClick={this.handleSelected}
                  value={1}
                  cardStyle={cardStyleClosed}
                  selected={selected === 1 ? '/assets/selected_2.png' : '/assets/deselected_2.png'}
                />
                <Card
                  onClick={this.handleSelected}
                  value={2}
                  cardStyle={cardStyleClosed}
                  selected={selected === 2 ? '/assets/selected_3.png' : '/assets/deselected_3.png'}
                />
                <Card
                  onClick={this.handleSelected}
                  value={3}
                  cardStyle={cardStyleClosed}
                  selected={selected === 3 ? '/assets/selected_4.png' : '/assets/deselected_4.png'}
                />
                <Card
                  onClick={this.handleSelected}
                  value={4}
                  cardStyle={cardStyleClosed}
                  selected={selected === 4 ? '/assets/selected_5.png' : '/assets/deselected_5.png'}
                />
                <div
                  className="slds-panel__body"
                  style={{
                    height: '44px', backgroundColor: '#F3F2F0', marginTop: '2px', paddingBottom: '0px'
                  }}
                >
                </div>
                <Card
                  onClick={this.handleSelected}
                  value={5}
                  cardStyle={cardStyleClosed}
                  selected={selected === 5 ? '/assets/selected_6.png' : '/assets/deselected_6.png'}
                />
              </div>


            </div>
          }
        </div>
        {/* <div className={panelClosed ? "slds-col slds-size_12-of-12" : "slds-col slds-size_9-of-12"} style={{ marginLeft: -100 }}> */}
        <div className={"slds-col slds-size_9-of-12"} style={{ marginLeft: 50 }}>
          {selected === 1 &&
            <GraphView />
          }
          {selected != 1 &&
            <TempView />
          }
        </div>
      </div>
    );
  }
}


export default LeftSideBar;
