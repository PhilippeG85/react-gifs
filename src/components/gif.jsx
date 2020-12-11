import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    this.props.select(this.props.id);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img className="gif" src={src} alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
