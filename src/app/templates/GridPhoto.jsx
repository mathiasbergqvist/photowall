import React from 'react';
import {render} from 'react-dom';

class GridPhoto extends React.Component {
  getClassName(imageIndex, currentImage){
    return (imageIndex === currentImage) ? "img-thumbnail current-image" : "img-thumbnail";
  }
  render(){
    return(
      <div className='photo col-sm-4 col-md-3 text-center' onClick={e => this.props.onClickCallback(this.props.imageIndex)}>
        <img src={this.props.src} className={this.getClassName(this.props.imageIndex, this.props.currentImage)} />
      </div>
    );
  }
}

export default GridPhoto;
