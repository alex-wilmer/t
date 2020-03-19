import React from 'react'
import { Link } from 'react-router-dom'

export const Splash = () =>
  <div>
    <div>
      <Link to="dashboard">Login</Link>
      <button>Sign up with facebook</button>
    </div>
    <div>
      Rally - The place to be
    </div>
  </div>