import './style.css';
import React from 'react'

const TextInput = ({ handle, value }) => {
    return (
        <input
            className='text-input'
            type="search" name="search"
            onChange={handle}
            value={value}
            placeholder='Type your search'
        />
    )
}

export default TextInput;