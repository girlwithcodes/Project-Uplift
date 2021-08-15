import api from './apiConfig';

export const getUserBoards = async(userID) => {
  try {
    const res = await api.get(`/users/${userID}/boards`);
    return res.data;
  } catch(error) {
    throw error
  }
}

export const getUserBoard = async(userID, boardID) => {
  try {
    const res = await api.get(`/users/${userID}/boards/${boardID}`);
    return res.data;
  } catch(error) {
    throw error
  }
}