import React from 'react';
import {render} from 'react-dom';

class GridPhoto extends React.Component {
  render(){
    return(
      <div className='photo col-sm-4 col-md-3 text-center'>
        <img src={this.props.src} className="img-thumbnail"/>
      </div>
    );
  }
}

export default GridPhoto;
