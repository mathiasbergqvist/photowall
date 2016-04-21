import React from 'react';
import {render} from 'react-dom';
import Photo from '../scripts/photo';

class CarouselImage extends React.Component{
  render(){
    return(
      <div className="item active center-text">
        <a href={this.props.link} target="_blank">
          <img src={this.props.src} alt="flickr-photo" />
          <div className="carousel-caption">
            <h4>{this.props.title}</h4>
            <p><span className="glyphicon glyphicon-camera" aria-hidden="true"></span> {this.props.photographer}</p>
          </div>
        </a>
      </div>
    );
  }
}

class Carousel extends React.Component{
  render(){
    var currentImage = this.props.currentImage;
    var carouselPhoto = this.props.photos.map(function(photo, i){
      if(currentImage===i){
        return (
          <CarouselImage key={i} src={photo.src} title={photo.title} photographer={photo.photographer} link={photo.link}/>
        );
      }
    });
    return(
      <div id="photo-carousel">
        <div className="carousel">
          <div className="carousel-inner" role="listbox">
            {carouselPhoto}
          </div>
          <a className="left carousel-control" onClick={this.props.onPrevClick} href="#js">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="right carousel-control" onClick={this.props.onNextClick} href="#js">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
