import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

function App(props) {
  return (
    <div>
      <h1 className={styles.heading}>Hello {props.name}</h1>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Stranger',
};

export default App;
