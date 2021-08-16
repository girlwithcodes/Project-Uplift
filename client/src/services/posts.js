import api from './apiConfig';

export const getPublicPosts = async() => {
  try {
    const public_posts = await api.get('/posts');
    return public_posts.data;
  } catch (error) {
    throw error;
  }
}

export const getBoardPosts = async(userID, boardID) => {
  try {
    const res = await api.get(`/users/${userID}/boards/${boardID}/posts`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getUserPosts = async(userID) => {
  try {
    const res = await api.get(`/user/${userID}/posts`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getOnePost = async(id) => {
  try {
    const res = await api.get(`posts/${id}`);
    return res.data;
  } catch(error) {
    throw error;
  }
}

// POST '/users/:user_id/boards/:board_id/posts'
export const createPost = async(userID, boardID, postData) => {
  try {
    const res = await api.post(`users/${userID}/boards/${boardID}/posts`, { post: postData });
    return res.data;
  } catch (error) {
    throw error;
  }
}

// PUT '/users/:user_id/boards/:board_id/posts/:id'
export const updatePost = async(userID, boardID, postID, postData) =>{
  try {
    const res = await api.put(`users/${userID}/boards/${boardID}/posts/${postID}`, {post: postData});
    return res.data
  } catch (error) {
    throw error;
  }
}