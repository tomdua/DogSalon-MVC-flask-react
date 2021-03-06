import axios from 'axios'

const API_URL = 'http://3.15.39.178:5000/userRoutes';


export const register = async user => {
  return await axios
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

export const login =  user => {
  return  axios
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