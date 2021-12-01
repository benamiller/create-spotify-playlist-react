import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Headlights', artist: 'Eminem', album: 'Marshall Mathers LP 2', id: '1'},
        {name: 'Someone Like You', artist: 'Adele', album: '25', id: '2'},
        {name: ''}
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
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
