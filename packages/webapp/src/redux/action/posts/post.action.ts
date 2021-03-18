import * as api from '../../../api/root';
import actionTypes from '../../action-types/post.types';

export const getAllPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: actionTypes.FETCH_ALL_POSTS, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createNewPost = (newPost: object) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(newPost);

    dispatch({ type: actionTypes.CREATE_NEW_POST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePost = (id: string, postToUpdate: any) => async (
  dispatch: any
) => {
  try {
    const { data } = await api.updatePost(id, postToUpdate);
    dispatch({ type: actionTypes.UPDATE_POST, payload: data });
  } catch (error) {
    console.error(error);
  }
};
