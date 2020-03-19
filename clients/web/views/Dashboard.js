import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { WebRTCProvider } from './SWRTC'

export const Dashboard = () => {
  return (
    <WebRTCProvider>
      <div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="profile">Profile</Link>
        </div>
        <Outlet />
      </div>
    </WebRTCProvider>
  )
}