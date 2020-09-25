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
            //username: this.state.username,
            //firstname: this.state.firstname,
            //lastname: this.state.lastname,
         })
     }
    // username

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Hello back</td>
                                <td>{this.state.username}</td>
                            </tr>
                            {/* <button onClick={addtolist} type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in to list
                            </button>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Delete my turn
                            </button> */}
                        </tbody>

            
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile