import React from 'react';
import {render} from 'react-dom';
import Backend from './scripts/backend';
import Photo from './scripts/photo';
import PhotoGrid from './templates/PhotoGrid.jsx';
import Carousel from './templates/Carousel.jsx';
import SearchComponent from './templates/SearchComponent.jsx';
import $ from 'jquery';
require("./less/main.less");
window.jQuery = require("jquery");
require('bootstrap/less/bootstrap.less');

class Photowall extends React.Component{

  constructor (props) {
    super(props);
    this.state = {photos: []};
    this.setCurrentImage = this.setCurrentImage.bind(this);
    this.searchImage = this.searchImage.bind(this);
  }

  componentDidMount(){

    // let backend = new Backend();

    this.props.backend.getImages((data) => {

      let photos = new Array();

      for(let photo of data.items){
        photos.push(new Photo(photo.media.m, photo.title, photo.author, photo.link));
      }

      this.setState({photos: photos, currentPhoto: 0});
    }, "New York");
  }

  setNextPhoto(){
    if(this.state.currentPhoto === 19){
      this.setState({currentPhoto: 0});
    }
    else{
      this.setState({currentPhoto: this.state.currentPhoto+1});
    }
  }

  setPrevPhoto(){
    if(this.state.currentPhoto === 0){
      this.setState({currentPhoto: 19});
    }
    else{
      this.setState({currentPhoto: this.state.currentPhoto-1});
    }
  }

  setCurrentImage(imageIndex){
    this.setState({currentPhoto: imageIndex});
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  searchImage(searchPhrase){

    console.log("searchImage", searchPhrase);

    this.props.backend.getImages((data) => {

      let photos = new Array();

      for(let photo of data.items){
        photos.push(new Photo(photo.media.m, photo.title, photo.author, photo.link));
      }

      this.setState({photos: photos, currentPhoto: 0});
    }, searchPhrase);
  }

  render(){
    return(
      <div id="main-container" className="container center-text">
        <div className="jumbotron text-center">
          <h1>Photowall</h1>
          <p id="header-description">Omegapoint web team <span className="glyphicon glyphicon-heart" aria-hidden="true"></span></p>
          <SearchComponent onSearch={this.searchImage}/>
        </div>
        <Carousel photos={this.state.photos} currentImage={this.state.currentPhoto} onNextClick={() => this.setNextPhoto()} onPrevClick={() => this.setPrevPhoto()}/>
        <PhotoGrid photos={this.state.photos} currentImage={this.state.currentPhoto} onImageClick={this.setCurrentImage}/>
      </div>
    );
  }
}

render(<Photowall backend={new Backend()} />, document.getElementById('photowall'));
