import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Splash = () => {
  let [text, setText] = useState('')

  useEffect(() => {
    window.channel.bind('channel-success', data => {
      console.log(data)
    });
  }, [])

  return (
    <div>
      <div>
        <Link to="dashboard">Login</Link>
        <button>Sign up with facebook</button>
      </div>
      <div>
        Rally - The place to be
    </div>
      <div>
        <div>Chat window</div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              window.channel.trigger('event', {
                "message": "hello world"
              });
            }
          }}
        />
      </div>
    </div>
  )
}