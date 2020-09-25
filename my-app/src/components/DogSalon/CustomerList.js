import React, { useState, useEffect } from 'react'
import { orderList } from './DogSalonFunctions'
import classes from './CustomerList.css'


const CustomrComponent = () => {

  const [order, getOrder] = useState([])

    useEffect(() => {
      orderList()
    }, [])

    orderList().then(response => {
      if(response != undefined)
      getOrder((response.data))
    })

    // const removeData = (id) => {
    //     axios.delete(`${URL}/${id}`).then(res => {
    //         const del = order.filter(employee => id !== employee.id)
    //         getOrder(del)
    //     })
    // }

    const renderHeader = () => {
        let headerElement = ['Username', 'current Time', 'arrive Time']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
      return order && order.map(({Username,currentTime,arriveTime  }) => {
        //return employees && employees.map(({id, username, currentTime, ArriveTime })  => {
          return (
              <tr key={Username}>
                  <td>{Username}</td>
                  <td>{currentTime}</td>
                  <td>{arriveTime}</td>
                  {/* <td className='opration'>
                      <button className='button' onClick={() => removeData(Username)}>Delete</button>
                  </td> */}
                </tr>
            )
        })
    }
      return (  
        <>
        <div className={classes.order}>
            <h1 id='title'>Order</h1>
            <table id='order'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            </div>
        </>
    )
}


export default CustomrComponent;

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const URL = 'http://localhost:5000/orderRoutes/orderlist'

// const CustomrComponent = () => {
//     const [employees, setEmployees] = useState([])

//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {

//         const response = await axios.get(URL)
//         setEmployees(response.data)
//     }




//     const removeData = (id) => {

//         axios.delete(`${URL}/${id}`).then(res => {
//             const del = employees.filter(employee => id !== employee.id)
//             setEmployees(del)
//         })
//     }

//     const renderHeader = () => {
//         let headerElement = ['Username', 'currentTime', 'arriveTime']

//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }


//     const renderBody = () => {
//         return employees && employees.map(({Username,currentTime,arriveTime  }) => {
//           //return employees && employees.map(({id, username, currentTime, ArriveTime })  => {
//             return (
//                 <tr key={Username}>
//                     <td>{Username}</td>
//                     <td>{currentTime}</td>
//                     <td>{arriveTime}</td>
//                     <td className='opration'>
//                         <button className='button' onClick={() => removeData(Username)}>Delete</button>
//                     </td>
//                 </tr>
//             )
//         })
//     }

//     return (
//         <>
//             <h1 id='title'>React Table</h1>
//             <table id='employee'>
//                 <thead>
//                     <tr>{renderHeader()}</tr>
//                 </thead>
//                 <tbody>
//                     {renderBody()}
//                 </tbody>
//             </table>
//         </>
//     )
// }


// export default CustomrComponent
