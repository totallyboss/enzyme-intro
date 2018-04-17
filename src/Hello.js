import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => (
  <p>Hello, {props.name || 'unknown'}!</p>
);

// Set default prop types
Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'unknown',
};

export default Hello;

