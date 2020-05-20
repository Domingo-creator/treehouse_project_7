import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = props => {

    const results = props.data; 
    let photos;
    if (results.photo.length > 0) {
        photos = results.photo.map( photo => 
            <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
        );
    } else {
        photos = <NoPhotos />
    }

    return (
        <ul className="photo-list">
            {photos}
        </ul>
    )
};

export default PhotoList;
