import React from 'react'
import { useParams } from 'react-router-dom'
import * as SWRTC from '@andyet/simplewebrtc';


export const Room = () => {
  let { room } = useParams()

  return (
    <div>
      <div>
        You are in room {room}
      </div>
      <SWRTC.Connecting>
        <h1>Connecting...</h1>
      </SWRTC.Connecting>

      <SWRTC.Connected>
        <h1>Connected!</h1>
        <SWRTC.RequestUserMedia audio video auto />
        <SWRTC.RemoteAudioPlayer />

        <SWRTC.Room name={room} password={"password"}>
          {props => {
            let { media } = window.store.getState().simplewebrtc



            return (
              <>
                number of peers is {props?.peers.length}
                {Object.values(media)
                  .filter(val => val.kind === 'video')
                  .map(val => <SWRTC.Video key={val.id} media={media[val.id]} />)
                }
              </>
            )
          }}
        </SWRTC.Room>
      </SWRTC.Connected>


    </div>
  )
}