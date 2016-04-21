import React from 'react';
import {render} from 'react-dom';
import Backend from './scripts/backend';
import Photo from './scripts/photo';
import PhotoGrid from './templates/PhotoGrid.jsx';
import Carousel from './templates/Carousel.jsx';
require("./less/main.less");
window.jQuery = require("jquery");
require('bootstrap/less/bootstrap.less');

class Photowall extends React.Component{

  constructor (props) {
    super(props);
    this.state = {photos: []};
  }

  componentDidMount(){

    let backend = new Backend();

    backend.getRequest((data) => {

      let photos = new Array();

      for(let photo of data.items){
        photos.push(new Photo(photo.media.m, photo.title, photo.author, photo.link));
      }

      this.setState({photos: photos, currentPhoto: 0});
    });
  }

  setNextPhoto(){
    console.log("setNextPhoto()");
    this.setState({currentPhoto: this.state.currentPhoto+1});
  }

  render(){
    return(
      <div className="container center-text">
        <h1>Photowall</h1>
        <Carousel photos={this.state.photos} currentImage={this.state.currentPhoto} onNextClick={() => this.setNextPhoto()}/>
        <PhotoGrid photos={this.state.photos}/>
      </div>
    );
  }
}

render(<Photowall/>, document.getElementById('photowall'));
