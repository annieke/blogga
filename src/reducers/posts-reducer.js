import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return Object.assign({}, state, {
        all: action, // DEBUG??? IS THIS RIGHT
      });
    case ActionTypes.FETCH_POST:
      return {};
    default:
      return {};
  }
};

export default PostsReducer;
