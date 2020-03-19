import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import * as SWRTC from '@andyet/simplewebrtc';
import { Splash } from './views/Splash';

const store = SWRTC.createStore();

window.store = store


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById('root'))