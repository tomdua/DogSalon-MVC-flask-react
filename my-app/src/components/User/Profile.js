import React, { Component } from 'react'
// import { addtolist } from './DogSalonFunctions'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
           // firstname:'',
            //lastname:''
        }
    }

    componentDidMount () {
    this.setState({
            username: localStorage.getItem('username')
         })
     }
    // username

    render () {
        return (
            <div className="container">
                <div >
                    <div className="col-sm-8 mx-auto">
                        <h1 style={{fontWeight:'bold',fontSize: '50px',marginBottom:'15px'}}>Profile</h1>
                    </div>
                    <p>Wellcom to your profile. Here you can edit your order</p>
                </div>
            </div>
        )
    }
}

export default Profile