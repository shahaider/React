                //import library

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// use http element: (npm install -save axios)
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


                // components
class AlbumList extends Component {
    state ={ albums: [] };

// LIFECYCLE METHOD (VIEWDIDLOAD)
componentWillMount() {
axios.get('https://rallycoding.herokuapp.com/api/music_albums')
.then(response => this.setState({ albums: response.data }));
}

renderAlbums() {
return this.state.albums.map(album => 
<AlbumDetail key={album.title} record={album} />
);
}

render() {
    console.log(this.state);
// JSX coding betwen render()
        return (
        <ScrollView>
      {this.renderAlbums()}
        </ScrollView>
        );
    }
}


// export 

export default AlbumList;
