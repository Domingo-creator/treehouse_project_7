import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Photo from './Photo';
import NoPhotos from './NoPhotos';

class PhotoList extends Component {
    
     componentDidUpdate = () => {
        if (this.props.searchText !== decodeURI(window.location.pathname.replace(/[^\w%\s]/gi, '')).replace("search", '')) {
            this.props.search();
        }
     }
  

    render() {
        const results = this.props.data; 
        let photos;
        if (results.photo.length > 0) {
            photos = results.photo.map( photo => 
                <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
            );
        } else {
            photos = <NoPhotos />
        }


        return (
            <div className="main-content">
                <h2 className="query-header">Images of: {this.props.searchText}</h2>
                <ul className="photo-list">
                    {photos}
                </ul>
            </div>
        )
    }
};

export default withRouter(PhotoList);
