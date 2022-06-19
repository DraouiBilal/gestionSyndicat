import axios from 'axios'

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['authorization'] = token
    localStorage.setItem('access_token', token)
  } else {
    delete axios.defaults.headers.common['authorization']
    localStorage.removeItem('access_token')
  }
}

export default setAuthToken