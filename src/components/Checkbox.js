import React from 'react'

export default ({ text, name, checked }) => {
    return (
        <label>
            <input className='nes-checkbox' type='checkbox' checked={checked} name={name} />
            <span>{text}</span>
        </label>
    )
}