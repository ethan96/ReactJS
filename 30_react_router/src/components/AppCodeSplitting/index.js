import React from 'react';
import Loadable from 'react-loadable';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Footer from '../Footer';
import Overlay from '../Overlay';

function Loading() {
  return <div>Loading</div>;
}
const About = Loadable({
  loader() {
    return import('../About');
  },
  loading: Loading,
});
const Videos = Loadable({
  loader() {
    return import('../Videos');
  },
  loading: Loading,
});

export default function App() {
  return (
    <Router>
      <div className="app" id="top">
        <div className="container">
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/vid" component={Videos} />
          <Route path="/vid/:id" component={Overlay} />
          <Route path="/about" exact component={About} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

