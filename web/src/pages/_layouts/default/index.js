import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return <div className="wrapper">{children}</div>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};