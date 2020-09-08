import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Auth0Provider
  domain="asearch.eu.auth0.com"
  clientId="rlAcQZaDpgKaRHwD2xmVlT31Idzx6cCH"
  redirectUri={window.location.origin}
    >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

