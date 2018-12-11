/* eslint global-require:0, no-console:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

// Hot Reloading + create-react-app
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      ReactDOM.render(<NextApp />, rootEl);
    });
  }
}
