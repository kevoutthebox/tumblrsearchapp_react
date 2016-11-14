import axios from 'axios';
import {
  FETCH_DATA,
  ADD_TO_FAVORTIES,
  DELETE_FROM_FAVORITES,
} from './types';

const ROOT_URL = 'http://api.tumblr.com/v2/';
const apiKey = 'yBdjHApJac6UnDT5jWrdSgGtaSModR8clY23MfzoEXLlCfX0bL';

export function addToFavorites(post) {
  return {
    type: ADD_TO_FAVORTIES,
    payload: post,
  };
}

export function DeleteFromFavorites(post) {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: post,
  };
}

export function fetchData(hostName, tag) {
  return function (dispatch) {
    if (hostName) {
      let url = `${ROOT_URL}blog/${hostName}.tumblr.com/posts?api_key=${apiKey}&tag=${tag}`;
      axios.get(url)
        .then(res => {
          dispatch({
            type: FETCH_DATA,
            payload: res.data.response.posts,
          });
        });
    } else if (tag) {
      let url = `${ROOT_URL}tagged?api_key=${apiKey}&tag=${tag}`;
      axios.get(url)
        .then(res => {
          dispatch({
            type: FETCH_DATA,
            payload: res.data.response,
          });
        });
    }
  };
}
