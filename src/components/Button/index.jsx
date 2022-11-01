import './style.css';

import React from 'react'

const Button = ({ handle, text, disabled }) => {
    return (
        <button
            className='button'
            onClick={handle}
            disabled={disabled}
        >
            {text}</button>
    )
}

export default Button