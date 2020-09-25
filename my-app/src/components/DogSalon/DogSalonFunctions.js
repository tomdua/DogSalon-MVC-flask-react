import axios from 'axios'

const API_URL = 'http://localhost:5000/orderRoutes';
const URL = 'http://localhost:5000/orderRoutes/neworder';




export const orderList = async () => {
  return await axios
    .get(API_URL+ '/orderlist', {
    })  
    .then(response => {
        return response
    })
    .catch(error => {
        console.log(error.response)
})
}

export const addOrder = (time) => {
  return  axios
    .put(`${URL}/${time}`).then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
})
}