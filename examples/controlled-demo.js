import React from 'react';
import Collapse from '../dist/Collapse';

export default class ControlledDemo extends React.Component {
  state = {
    isOpen: false
  };

  toggleIsOpen = () => this.setState(({isOpen}) => ({isOpen: !isOpen}));

  render() {
    return (
      <Collapse>
        {({getCollapsibleProps, getTogglerProps, contentRef}) => (
          <React.Fragment>
            <button {...getTogglerProps()}>Open</button>
            <div
              {...getCollapsibleProps({
                style: {
                  borderRadius: 3,
                  border: '1px solid paleviolet',
                  background: 'lightblue'
                }
              })}
            >
              <div
                style={{
                  borderRadius: '50%',
                  background: 'blue',
                  height: '300px',
                  width: '100%'
                }}
              />
            </div>
          </React.Fragment>
        )}
      </Collapse>
    );
  }
}