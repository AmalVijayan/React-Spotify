import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import { getAccessToken } from './spotify'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
  
  useEffect((  ) => {
    
    const response = getAccessToken();
    window.location.hash = ''
    const _token = response.access_token;
    if(_token){

      dispatch({
        type:"SET_TOKEN",
        token:_token
      });

      spotify.setAccessToken(_token)

      spotify.getMe().then( (user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      }, reason => {
        console.log("Fetching user failed due to ::: ", reason)
      });

      spotify.getUserPlaylists().then(playlist => {
        dispatch({
          type:'SET_PLAYLIST',
          playlist:playlist,
        })
      },reason => {
        console.log("Fetching Playlist failed due to ::: ", reason)
      });

      spotify.getPlaylist("37i9dQZEVXcEtzJyk3Lowr").then( playlist => {
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist
        })
      })

    }
    }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
     
    </div>
    
  );
}

export default App;
