import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LinkContextProvider } from './store/link-context';

ReactDOM.render(
  <LinkContextProvider>
    <App />
  </LinkContextProvider>,
  document.getElementById('root')
);

