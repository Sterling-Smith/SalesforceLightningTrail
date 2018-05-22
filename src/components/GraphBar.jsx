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

const Dropdown = props => (
   <span className="slds-form-element">
    <span className="slds-form-element__control">
      <span className="slds-combobox_container" style={{display: 'inline-block', margin: '0px 10px'}}>
        <span className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox">
          <span className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
            <input type="text" style={{ width: '140px', height:'10px'}}className="slds-input slds-combobox__input" id="combobox-id-1" aria-controls="listbox-id-1" autoComplete="off" role="textbox" placeholder={props.defaultText} readonly="" />
            <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
              <img style={{marginRight: '0px'}} src="/assets/down_120.png" width="15px" height="15px" />
            </span>
          </span>
          <span id="listbox-id-1" className="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid" role="listbox">
            <ul className="slds-listbox slds-listbox_vertical" role="presentation">
              <li role="presentation" className="slds-listbox__item">
                <span id="option1" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option">
                  <span className="slds-media__body">
                    <span className="slds-truncate" title="Accounts"> {props.defaultText}</span>
                  </span>
                </span>
              </li>
            </ul>
          </span>
        </span>
      </span>
    </span>
  </span>
);

const GraphBar = (props) => (
  <div>
    <div style={{ backgroundColor: '#F3F2F0', marginTop: '10px', padding: '15px', marginLeft: 10, marginRight: 33}}>
      <span style={{marginLeft: '10px'}}>Dimensions</span>
      <span style={{marginLeft: '10px'}}>X</span>
      <Dropdown defaultText="Account size" />
      <span>Y</span>
      <Dropdown defaultText="Discount %" />
      <span>Dots</span>
      <Dropdown defaultText="Customer" />
      <span>Product family</span>
      <Dropdown defaultText="Product family" />
      <span>Date</span>
      <Dropdown defaultText="Last quarter" />
    </div>
    <div>
      {props.children}
    </div>
  </div>
);

export default GraphBar;
