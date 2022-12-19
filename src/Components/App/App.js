import React from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 }, {
        name: 'name2', artist: 'artist2', album: 'album2',
        id: 2
      }, { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }],
      playlistName: 'playlist',
      playlistTracks: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 }, { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let playlist = this.state.playlistTracks;
    if (playlist.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    playlist.push(track);
    this.setState({ playlistTracks: playlist });
  }

  removeTrack(track) {
    let playlist = this.state.playlistTracks;
    let newPlaylist = playlist.filter((tracks) => tracks.id !== track.id);
    this.setState({ playlistTracks: newPlaylist });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);

  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      });
    });
  }
  
  render() {
      return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar
              onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults 
                onAdd={this.addTrack} 
                searchResults={this.state.searchResults} />
              <Playlist
              onSave={this.savePlaylist}
                onNameChange={this.updatePlaylistName} 
                onRemove={this.removeTrack} 
                playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
      </div >
    )
  }
};

export default App;
