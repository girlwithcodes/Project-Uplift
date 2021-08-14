import api from './apiConfig';

export const getPublicPosts = async() => {
  const public_posts = await api.get('/posts');
  return public_posts.data;
}