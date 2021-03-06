# React-Collapsed

A small (< 2.5kb), headless component for creating flexible and accessible expand/collapse components.

## Features

- Handles the height of animations of your elements, `auto` included!
- You control the UI - with prop-getters, you give ReactCollapsed's logic to your elements
- Built with accessibility in mind - no need to worry if your collapse/expand component is accessible, since this takes care of it for you!
- Small footprint (< 2.5kb gzipped)
- No animation framework required! Simply powered by CSS animations

## Demo

[See the demo site!](https://react-collapsed.netlify.com/)

## Installation

```bash
$ yarn add react-collapsed
# or
$ npm i react-collapsed
```

## Usage

### Simple Usage

You can let ReactCollapsed handle the expanding and closing for you:

```js
import Collapse from 'react-collapsed';

<Collapse>
  {({getCollapseProps, getTogglerProps, isOpen}) => (
    <React.Fragment>
      <button {...getTogglerProps()}>Toggle Collapse</button>
      <div {...getCollapseProps()}>
        {isOpen ? `I'm visible!` : `You can't see me!`}
      </div>
    </React.Fragment>
  )}
</Collapse>;
```

### Control it yourself

```js
import Collapse from 'react-collapsed';

class ControlledDemo extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => this.setState(({isOpen}) => ({isOpen: !isOpen}));

  render() {
    return (
      <Collapse isOpen={this.state.isOpen}>
        {({getCollapseProps, getTogglerProps}) => (
          <React.Fragment>
            <button {...getTogglerProps({onClick: this.handleClick})}>
              Toggle Collapse
            </button>
            <div {...getCollapseProps()}>
              {this.state.isOpen ? `I'm visible!` : `You can't see me!`}
            </div>
          </React.Fragment>
        )}
      </Collapse>
    );
  }
}
```

## API

| Prop        | Type             | Default                                    | Description                                     |
| ----------- | ---------------- | ------------------------------------------ | ----------------------------------------------- |
| children    | func             |                                            | Render prop to create the Collapse UI           |
| isOpen      | bool             | `null`                                     | If true, the Collapse is expanded               |
| defaultOpen | bool             | `false`                                    | If true, the Collapse will be expanded on mount |
| duration    | number \| object | `500`                                      | Length of animation (in MS)                     |
| easing      | number \| object | `cubic-bezier(0.250, 0.460, 0.450, 0.940)` | CSS timing function for animation               |
| delay       | number \| object | `0`                                        | Animation delay (in MS)                         |

## Acknowledgments

Received lots of inspiration for implementation from [react-show](https://github.com/react-tools/react-show). If you need a more generalized API for CSS animations, check it out!
