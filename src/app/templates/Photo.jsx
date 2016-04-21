import React from 'react';
import {render} from 'react-dom';

class Photo extends React.Component {
  render(){
    return(
      <div className='photo'>
        <img src={this.props.link} />
        <p>{this.props.author}</p>
      </div>
    );
  }
}

export default Photo;
