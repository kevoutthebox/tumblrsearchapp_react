import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


class PostsList extends Component {

  handleClick(post) {
    this.props.addToFavorites(post);
  }

  renderPosts() {
    let posts = this.props.posts;
    if (posts.length) {
      return posts.map(post => {
        return (
          <li key={post.id} className="list-group-item posts">
            <div className="fields">Blog Name:
              <button
                onClick={() => this.handleClick(post)}
                className="btn btn-primary pull-right"
              >
                Add
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
      <div className="row">
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, actions)(PostsList);
