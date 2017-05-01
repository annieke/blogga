import axios from 'axios';
// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
    const API_KEY = '?key=annie_ke';
    // const res;

    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // res = response;
    }).catch((error) => {
      console.log('error during fetchPosts()');
    });
    // dispatch({ type: ActionTypes.FETCH_POSTS, payload: res });
  };
}

export function createPost(post, history) {
  /* axios post */
}

export function updatePost(post) {
  /* axios put */
}

export function fetchPost(id) {
  /* axios get */
}

export function deletePost(id, history) {
  /* axios delete */
}
