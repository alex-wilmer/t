import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Splash } from './views/Splash';
import { Dashboard } from './views/Dashboard';
import { Profile } from './views/Profile';
import { Rooms } from './views/Rooms';
import { Room } from './views/Room'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path=":room" element={<Room />} />
          <Route element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById('root'))