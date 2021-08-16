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

export const createBoard = async(userID, boardData) => {
  try {
    const res = await api.post(`/users/${userID}/boards`, boardData);
    return res.data;
  } catch(error) {
    throw error;
  }
}

export const editBoard = async(userID, boardID, boardData) => {
  try {
    const res = await api.put(`/users/${userID}/boards/${boardID}`, boardData);
    return res.data;
  } catch(error) {
    throw error;
  }
}

export const deleteBoard = async(userID, boardID) => {
  try {
    const res = await api.delete(`/users/${userID}/boards/${boardID}`);
    return res.data;
  } catch(error) {
    throw error;
  }
}