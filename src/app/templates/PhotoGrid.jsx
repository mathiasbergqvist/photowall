import React from 'react';
import {render} from 'react-dom';
import Photo from './Photo.jsx';

class PhotoGrid extends React.Component{
  render(){
    var photos = this.props.photos.map(function(photo){
      console.log("photo", photo);
      return(
        <Photo link={photo.link} author={photo.photographer}/>
      );
    });

    return(
      <div id="photo-grid">
        {photos}
      </div>
    );
  }
}

export default PhotoGrid;
