import React from 'react';
import {render} from 'react-dom';
import Backend from '../scripts/backend';
import Photo from '../scripts/photo';
import PhotoGrid from './templates/PhotoGrid.jsx';
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
        photos.push(new Photo(photo.media.m, photo.title, photo.author));
      }

      this.setState({photos: photos});
    });
  }

  render(){
    return(
      <div>
        <h1>Photowall</h1>
        <button type="button" class="btn btn-primary">Primary</button>
        <PhotoGrid photos={this.state.photos}/>
      </div>
    );
  }
}

render(<Photowall/>, document.getElementById('photowall'));
