
import React, { Component } from 'react'
import Logo from './Logo/Logo';

class HomePage extends Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Dog Store</h1>
                    </div>
                </div>
                <Logo />
            </div>
        )
    }
}


export default HomePage