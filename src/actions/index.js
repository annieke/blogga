import axios from 'axios';
// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=annie_ke';

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response });
    }).catch((error) => {
      console.error(error);
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then(() => {
      history.push('/');
    }).catch((error) => {
      console.error(error);
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post._id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response });
    }).catch((error) => {
      console.error(error);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response });
    }).catch((error) => {
      console.error(error);
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
      history.push('/');
    }).catch((error) => {
      console.error(error);
    });
  };
}
