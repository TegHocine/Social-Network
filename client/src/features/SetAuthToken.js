import instance from './axiosInstance'
const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['x-auth-token'] = token
    localStorage.setItem('token', token)
  } else {
    delete instance.defaults.headers.common['x-auth-token']
    localStorage.removeItem('token')
  }
}

export default setAuthToken
