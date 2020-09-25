import axios from 'axios'

const API_URL = 'http://localhost:5000/orderRoutes';


export const orderList = async () => {
  return await axios
    .get(API_URL+'/orderlist', {
    })  
    .then(response => {
        return response
    })
    .catch(error => {
        console.log(error.response)
})
}
