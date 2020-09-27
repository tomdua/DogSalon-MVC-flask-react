import React, { useState, useEffect } from 'react'
import { orderList, deleteOrder } from './DogSalonFunctions'
import classes from './CustomerList.css'



const CustomrComponent = () => {

  const [orders, setOrder] = useState([])

    useEffect(() => {
      // username=localStorage.getItem('username'),
      orderList().then(response => {
        if(response !== undefined)
          setOrder((response.data))
      })
    }, [])

    const removeData = (username) => {
      let usernaem_storage=localStorage.getItem('username')
      if(usernaem_storage===username)
      deleteOrder(username)
  }


    const renderHeader = () => {
        let headerElement = ['Username', 'current Time', 'arrive Time', 'Delete']
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
                  <td className='opration'>
                        <button className='button' onClick={() => removeData(Username)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

      return (  
        <>
        <div >
        <div className={classes.order}>
            <h1 id='title'>Order</h1>
            <table id='order' className={"myTable"}>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody style={{backgroundColor:'white'}}>
                    {renderBody()}
                </tbody>
            </table>
            </div>
            {/* <button type="submit" className="btn-primary btn-block" onClick={() => removeData(this)} >Sign in</button> */}
          </div>
        </>
    )
}


export default CustomrComponent;