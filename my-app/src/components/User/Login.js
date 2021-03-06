import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password,
            
        }

        login(user).then(res => {
            console.log(res);
            if(res===undefined)
                alert('Invalid username/password combination')
            else{
            if (res.data === 'Suscs username/password combination') 
            this.props.history.push(`/profile`)
            else
                alert('Invalid username/password combination')
            }
            })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 style={{fontWeight:'bold',fontSize: '50px',marginBottom:'15px'}}>Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    data-parse="uppercase"
                                    />
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
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login