import api from './apiConfig';

export const login = async(userInfo) => {
  const res = await api.post('/users/login', {user: userInfo});
  const { token } = res.data;
  if(token) {
    localStorage.setItem('authToken', token);
    api.defaults.headers.common.authorization =`Bearer ${token}`;
    return res.data.user;
  }
}

export const verify = async() => {
  const token = localStorage.getItem('authToken');
  if(token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/users/verify");
    return res.data;
  }
}