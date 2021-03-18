import postTypes from '../../action-types/post.types';

// initial posts state:
const INITIAL_STATE = {
  allPosts: [],
};

// action interface:
interface actionsInterface {
  type: string;
  payload: any;
}

const postsReducer = (state = INITIAL_STATE, action: actionsInterface) => {
  switch (action.type) {
    case postTypes.UPDATE_POST:
      const withOneToUpdate = state.allPosts.map((post: any) =>
        post._id === action.payload._id ? action.payload : post
      );
      return { ...state, allPosts: withOneToUpdate };

    case postTypes.FETCH_ALL_POSTS:
      return { ...state, allPosts: action.payload };

    case postTypes.CREATE_NEW_POST:
      return { ...state, allPosts: [...state.allPosts, action.payload] };

    default:
      return state;
  }
};

export default postsReducer;
