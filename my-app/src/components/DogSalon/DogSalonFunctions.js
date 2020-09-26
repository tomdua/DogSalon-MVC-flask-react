import axios from 'axios'

const API_URL = 'http://localhost:5000/orderRoutes';
// axios.defaults.withCredentials=true


export const orderList = () => {
  return  axios
    .get(API_URL+ '/orderlist', {
    })  
    .then(response => {
        return response
    })
    .catch(error => {
        console.log(error.response)
})
}

export const addOrder = (username,time) => {
  axios.post(API_URL+'/neworder',{username, time},
    )
  .then(response => {
        console.log(response)
        // return response
    })
    .catch(error => {
      console.log(error.response)
      // return error.response
})
}

export async function  deleteOrder(username){
  try{
    await axios.put(API_URL+'/deleteorder',{username})
  }
  catch(error){
      console.log(error.response)
  }
}
