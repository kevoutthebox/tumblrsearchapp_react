import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import FavoritesReducer from './reducer_favorites';

const rootReducer = combineReducers({
  posts: PostsReducer,
  favorites: FavoritesReducer,
});

export default rootReducer;
