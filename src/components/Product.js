import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propsName) => {
    const weight = props[propsName];

    if (weight === undefined){
      return new Error('The `weight` prop is required.');
    }
    else if (isNaN(weight)) {
     return new Error('The `weight` prop is not a number.');
    }
    else if (weight <= 80 || weight >= 300) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}
