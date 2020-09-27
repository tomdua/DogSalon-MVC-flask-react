import Dog from '../../assets/images/icon.png'
import React from 'react'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img style={{width:'50%',height:'50%'}} src={Dog} alt="MyDog" />
    </div>
);

export default logo;