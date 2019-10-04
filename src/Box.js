import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <div style={{ // nested object
          height: `${this.props.height}em`,
          width: `${this.props.width}em`,
          backgroundColor: this.props.color,
          key: this.props.id
        }}>
          <button onClick={this.props.removeBox}>Remove box</button>
        </div>
      </div>
    );
  }
}


export default Box;