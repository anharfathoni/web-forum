/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function BodyThread({ text, isCutText }) {
  if (text.includes('<')) {
    return <div className={isCutText ? 'cut-text' : ''} dangerouslySetInnerHTML={{ __html: text }} />;
  }
  return <p className={isCutText ? 'cut-text' : ''}>{text}</p>;
}

BodyThread.propTypes = {
  text: PropTypes.string,
  isCutText: PropTypes.bool,
};

BodyThread.defaultProps = {
  text: '',
  isCutText: false,
};

export default BodyThread;
