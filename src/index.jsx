import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './index.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Topics from './components/Topics/Topics';

const NotFound = ({ location }) => (
  <h1>404.. Can not find page <code> { location.pathname }</code>!</h1>
);
NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

NotFound.defaultProps = {
  location: {
    pathname: '',
  },
};

const RouterExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ul>
    </div>

  </Router>
);
ReactDOM.render(<RouterExample />, document.getElementById('root'));
