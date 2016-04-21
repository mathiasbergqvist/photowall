import React from 'react';
import {render} from 'react-dom';
import GridPhoto from './GridPhoto.jsx';

class PhotoGrid extends React.Component{
  render(){

    var photos = this.props.photos.map(function(photo){
      // console.log(photo);
      return(
        <GridPhoto src={photo.src}/>
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
