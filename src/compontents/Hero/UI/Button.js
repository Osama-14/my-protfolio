import React from 'react'
import { Colors } from '../../../Style'

const Button = (props) => {
    return <a href="#" style={{
        boxSizing:'border-box',
        padding: '10px 20px',
        background: Colors.primaryColor,
        color:'#fff',
        display:'block',


    }}>
        {props.label}

    </a>

    
}

export default Button
