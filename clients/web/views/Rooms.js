import React from 'react'
import { Link } from 'react-router-dom'

let rooms = [
  'Local Bar',
  'Alexs Place'
]

export const Rooms = () =>
  <div>
    <div>Rooms</div>
    {rooms.map(room => <div key={room}><Link to={room}>{room}</Link></div>)}
  </div>