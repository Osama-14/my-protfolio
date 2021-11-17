import React from 'react'
import { Colors } from '../../../Style'

const Button = (props) => {
    return <a href="#" style={{
        boxSizing:'border-box',
        padding: '10px 20px',
        background: props.inverse ? 'transparent' : Colors.primaryColor,
        color: props.inverse ? Colors.primaryColor : '#fff',
        display:'inline-block',
        borderRadius:'20px',
        boxShadow: props.inverse ? 'none' : '0 0 10px 0px #6dba6d ',
        border:'1px solid',
        borderColor: props.inverse ? Colors.primaryColor : "transparent",
        fontSize: 12,
        letterSpacing: "1px",


    }}>
        {props.label}

    </a>

    
}

export default Button
