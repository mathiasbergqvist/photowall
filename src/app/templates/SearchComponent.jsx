import React from 'react';
import {render} from 'react-dom';

class SearchComponent extends React.Component{
  constructor (props) {
    super(props);
    this.state = {searchPhrase: ''};
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let searchPhrase = this.state.searchPhrase.trim();
    this.props.onSearch(searchPhrase);
  }
  handleSearchChange(e){
    this.setState({searchPhrase: e.target.value});
  }
  render(){
    return(
      <form id="search-form" className="form-inline" onSubmit={this.handleSubmit}>
        <label for="search-input">Search for images:</label>
        <input type="text" className="form-control" id="search-input" size="50" value={this.state.searchPhrase} onChange={this.handleSearchChange} placeholder="New York" />
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    );
  }
}

export default SearchComponent;
