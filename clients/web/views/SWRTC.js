import { Provider } from 'react-redux';
import React from 'react'

import * as SWRTC from '@andyet/simplewebrtc';

const API_KEY = 'e0cb6b0534acb5bf440b9f78';
const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

const store = SWRTC.createStore();

window.store = store

export const WebRTCProvider = ({ children }) =>
  <Provider store={store}>
    <SWRTC.Provider configUrl={CONFIG_URL}>
      {children}
    </SWRTC.Provider>
  </Provider>