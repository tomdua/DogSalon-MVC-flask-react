import axios from 'axios'

const API_URL = 'http://localhost:5000';

export const addtolist = () => {
  return axios
    .get(API_URL+'/customers/addtolist', {
    })  
    .then(response => {
        console.log("Registered")
    })
    .catch(error => {
        console.log(error.response)
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

// export const getProfile = user => {
//   return axios
//     .get('profile', {
//       //headers: { Authorization: ` ${this.getToken()}` }
//     })
//     .then(response => {
//       console.log(response)
//       return response.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }