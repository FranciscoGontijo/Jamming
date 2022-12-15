import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        let newName = e.target.value;
        this.props.onNameChange(newName);
    }

    render() {
        return (
            <div className="Playlist">
                <input
                onChange={this.handleNameChange}
                defaultValue={'New Playlist'} />
                <TrackList
                    isRemoval={true}
                    onRemove={this.props.onRemove} 
                    tracks={this.props.playlistTracks} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
};

export default Playlist;