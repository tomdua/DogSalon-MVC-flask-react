import React, { useState, useEffect } from 'react'
import { orderList, deleteOrder } from './DogSalonFunctions'
import classes from './CustomerList.css'


const CustomrComponent = () => {

  const [orders, setOrder] = useState([])

    useEffect(() => {
      orderList().then(response => {
        if(response != undefined)
          setOrder((response.data))
      })
    }, [])

  //   const removeData = () => {
  //   deleteOrder()
  // }

    const renderHeader = () => {
        let headerElement = ['Username', 'current Time', 'arrive Time']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
      return orders.map(({Username,currentTime,arriveTime  }) => {
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
        <div>
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
            {/* <button type="submit" className="btn-primary btn-block" onClick={() => removeData()} >Sign in</button> */}
          </div>
        </>
    )
}


export default CustomrComponent;