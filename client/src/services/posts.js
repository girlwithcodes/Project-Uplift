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