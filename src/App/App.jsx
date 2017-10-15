import React from 'react';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
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
