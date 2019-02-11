import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const Loader = ({ light }) => (
  <div className={styles.Loader}>
    <div className={styles.Bounce1} style={{ backgroundColor: light ? '#fff' : '#1a1a1a' }} />
    <div className={styles.Bounce2} style={{ backgroundColor: light ? '#fff' : '#1a1a1a' }} />
    <div className={styles.Bounce3} style={{ backgroundColor: light ? '#fff' : '#1a1a1a' }} />
  </div>
);

Loader.defaultProps = {
  light: false,
};

Loader.propTypes = {
  light: PropTypes.bool,
};

export default Loader;
