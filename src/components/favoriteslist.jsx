import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class FavoritesList extends Component {

  handleClick(post) {
    this.props.DeleteFromFavorites(post);
  }

  renderFavorites() {
    let posts = this.props.favorites;
    if (posts.length) {
      return posts.map(post => {
        return (
          <li key={post.id} className="list-group-item posts">
            <div className="fields">Blog Name:
              <button
                onClick={() => this.handleClick(post)}
                className="btn btn-danger pull-right"
              >
                Remove
              </button>
            </div>{post.blog_name}
            <div className="fields">Summary: </div>{post.summary}
            <div className="fields">Post URL:
              <a href={post.post_url}>Link to Tumblr Post</a>
            </div>
            {post.type==="photo" &&
            <div className="thumbnail" ng-show="post.type === 'photo'">
              <img src={post.photos[0].alt_sizes[2].url} />
            </div>}
            {post.type==="video" && <span>Click on Above link to view video</span>}
            {post.type==="text" || post.type==="quote" || post.type==="chat" && <span>{post.body }</span>}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>Favorites:</h1>
        <ul className="list-group">
          {this.renderFavorites()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { favorites: state.favorites.all };
}

export default connect(mapStateToProps, actions)(FavoritesList);
