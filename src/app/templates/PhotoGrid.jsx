import React from 'react';
import {render} from 'react-dom';
import GridPhoto from './GridPhoto.jsx';

class PhotoGrid extends React.Component{
  render(){
    var onClickCallback = this.props.onImageClick;
    var currentImage = this.props.currentImage;
    var photos = this.props.photos.map(function(photo, i){
      return(
        <GridPhoto key={i} src={photo.src} onClickCallback={onClickCallback} currentImage={currentImage} imageIndex={i}/>
      );
    });

    return(
      <div id="photo-grid" className="row">
        {photos}
      </div>
    );
  }
}

export default PhotoGrid;
