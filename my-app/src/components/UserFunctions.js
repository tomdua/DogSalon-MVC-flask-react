import axios from 'axios'

const API_URL = 'http://localhost:5000/routes';


export const register = user => {
  return axios
    .post(API_URL+'/register', {
    firstname: user.firstname,
    lastname: user.lastname,
      username: user.username,
      password: user.password
    })  
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export const login = user => {
  return axios
    .post(API_URL+'/login', {
      username: user.username,
      password: user.password
    })
    .then(response => { 
        console.log(response)
        localStorage.setItem('usertoken', response.data.token)
        localStorage.setItem('username', user.username)
        return response
    })
    .catch(error => {
    console.log(error.response)
});
}

export const getProfile = () => {
  return axios
    .get('/profile', {
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}