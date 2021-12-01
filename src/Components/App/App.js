import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Headlights', artist: 'Eminem', album: 'Marshall Mathers LP 2', id: '1'},
        {name: 'Someone Like You', artist: 'Adele', album: '25', id: '2'},
        {name: 'Intro', artist: 'Ariana Grande', album: 'Christmas', id: '3'}
      ],
      playlistName: 'Playlist',
      playlistTracks: [
        {name: 'Video Games', artist: 'Lana Del Rey', album: 'Born To Die', id: '1'},
        {name: 'Intro', artist: 'Logic', album: 'Under Pressure', id: '2'},
        {name: 'Castle', artist: 'Eminem', album: 'Revival', id: '3'} 
      ]
    }
  };

  render() {
    return (
      <div>
        <h1>Spot<span class="highlight">iii</span>ify</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
