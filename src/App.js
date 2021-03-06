import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(token);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: "Not Checked", albumArt: "" },
    };
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log("response", response);
      // this.setState({
      //   nowPlaying: {
      //     name: response.item.name,
      //     albumArt: response.item.album.images[0].url,
      //   },
      // });
    });
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888"> Login to Spotify </a>
        {/* <div>Now Playing: {this.state.nowPlaying.name}</div> */}
        <div>
          {/* <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} /> */}
          <Sidebar />
        </div>
        {this.state.loggedIn && (
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        )}
      </div>
    );
  }
}

export default App;
