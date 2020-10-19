import React from 'react'
import './Login.css';
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className='login'>
           <img className="logo_image" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt=""/>
           <a href={loginUrl}>Login To Spotify</a>
        </div>
    )
}
export default Login
