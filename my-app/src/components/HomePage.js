
import React, { Component } from 'react'
import Logo from './Logo/Logo';

class HomePage extends Component {
    render () {
        return (
            <div className="container">
                <div >
                    <div className="col-sm-8 mx-auto" style={{marginTop:'50px', marginBottom: '50px'}}>
                        <h1 className="text-center" style={{fontWeight: 'bold',fontSize: '50px',marginBottom:'15px'}} >Dog Store</h1>
                    </div>
                </div>
                <Logo />

            </div>
        )
    }
}


export default HomePage