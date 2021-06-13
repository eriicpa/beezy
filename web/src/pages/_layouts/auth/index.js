import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function AuthLayout({ children }) {
  return <div className="wrapper">{children}</div>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};