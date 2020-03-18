import { Provider } from 'react-redux';
import React from 'react'
import { render } from 'react-dom'

import * as SWRTC from '@andyet/simplewebrtc';

const API_KEY = 'e0cb6b0534acb5bf440b9f78';
// ====================================================================

const ROOM_NAME = 'YOUR_ROOM_NAME';
const ROOM_PASSWORD = 'YOUR_ROOM_PASSWORD';
const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

const store = SWRTC.createStore();

window.store = store

render(<Provider store={store}>
  <SWRTC.Provider configUrl={CONFIG_URL}>
    {/* Render based on the connection state */}
    <SWRTC.Connecting>
      <h1>Connecting...</h1>
    </SWRTC.Connecting>

    <SWRTC.Connected>
      <h1>Connected!</h1>
      {/* Request the user's media */}
      <SWRTC.RequestUserMedia audio video auto />

      {/* Enable playing remote audio. */}
      <SWRTC.RemoteAudioPlayer />

      {/* Connect to a room with a name and optional password */}
      <SWRTC.Room name={ROOM_NAME} password={ROOM_PASSWORD}>
        {props => {
          let { media } = store.getState().simplewebrtc
          {/* console.log(123, media) */ }
          return (
            <>

              'number of peers is '  {props.peers.length}
              {Object.values(media)
                .filter(val => val.kind === 'video')
                .map(val => <SWRTC.Video key={val.id} media={media[val.id]} />)
              }
            </>
          )



        }}
      </SWRTC.Room>
    </SWRTC.Connected>
  </SWRTC.Provider></Provider>, document.getElementById('root'))