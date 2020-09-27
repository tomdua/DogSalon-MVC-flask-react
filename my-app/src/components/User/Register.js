import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password
        }

        register(newUser).then(response => {
            console.log(response);
            if(response===undefined || response.data==='That username already exists!')
                alert('That username already exists!')
            this.props.history.push(`/login`)
    })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 style={{fontWeight:'bold',fontSize: '50px',marginBottom:'15px'}}>Register</h1>
                            <div className="form-group">
                                <label htmlFor="firstname,">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="firstname"
                                     placeholder="Enter First Name"
                                    value={this.state.firsname}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="lastname"
                                    placeholder="Enter Last Name"
                                    value={this.state.lastname}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter username"
                                    value={this.state.username}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>

                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register