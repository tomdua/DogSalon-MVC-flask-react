import axios from 'axios'

const API_URL = 'http://localhost:5000/orderRoutes';
axios.defaults.withCredentials=true


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

export const addOrder = time => {
  axios.post(API_URL+'/neworder',{time},
  {withCredentials:true}
    )
  .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
})
}

export const deleteOrder = () => {
  axios.get(API_URL+'/deleteorder',{withCredentials:true} )  
  .then(response => {
      console.log(response)
      return response.data
  })
  .catch(error => {
      console.log(error.response)
})
}
