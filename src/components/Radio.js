import React from 'react'

export default ({ text, name, checked }) => {
    return (
        <label>
            <input className='nes-radio' type='radio' name={name} checked={checked} />
            <span>{text}</span>
        </label>
    )
}