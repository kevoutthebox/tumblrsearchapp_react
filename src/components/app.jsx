import React, { Component } from 'react';
import SearchInput from './searchinput';
import PostsList from './postslist';
import FavoritesList from './favoriteslist';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="row">
          <div className="col-md-6">
            <SearchInput />
            <PostsList />
          </div>
          <FavoritesList />
        </section>
      </div>
    );
  }
}
