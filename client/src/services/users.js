import api from './apiConfig';

export const register = async(userInfo) => {
  try {
    const res = await api.post('/users', { user: userInfo });
    const { token } = res.data
    if(token) {
      localStorage.setItem('authToken', token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      return res.data;
    }
  } catch (error) {
    throw error
    
  }

}
export const login = async(userInfo) => {
  try {
    const res = await api.post('/users/login', {user: userInfo});
    const { token } = res.data;
    if(token) {
      localStorage.setItem('authToken', token);
      api.defaults.headers.common.authorization =`Bearer ${token}`;
      return res.data.user;
    }
  } catch (error) {
    throw error;
  }
}

export const verify = async() => {
  const token = localStorage.getItem('authToken');
  if(token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/users/verify");
    return res.data;
  }
  return false;
}

export const logout = async() => {
  try {
    localStorage.removeItem('authToken');
    api.defaults.headers.common.authorization = null;
  } catch(error) {
    throw error;
  }
  
}