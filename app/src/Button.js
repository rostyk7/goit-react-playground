import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const buttonStyle = {
    backgroundColor: props.color
  };
  if (props.withBorder) {
    buttonStyle.border = '5px solid green';
  }
  return (
    <>
      <button style={buttonStyle}>
      {props.children}
      </button>
      <p>
        {props.label} {props.withBorder && '- border'}
      </p>
    </>
  );
}

Button.defaultProps = {
  withBorder: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;