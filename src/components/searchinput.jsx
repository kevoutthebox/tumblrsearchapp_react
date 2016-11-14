import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchInput extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchData(this.refs.blogname.value, this.refs.tag.value);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="col-md-6">
            <h1>Blog Name:</h1>
            <input type="text" ref="blogname" placeholder="Name of Tumblr Blog" />
          </div>
          <div className="col-md-6">
            <h1>Tag:</h1>
            <input type="text" ref="tag" placeholder="Tag" />
          </div>
          <div>
            <button className="btn btn-secondary pull-right submit-button" type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(SearchInput);
