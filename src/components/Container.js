import React from 'react'

export default ({ title, centered, dark, children }) => {
    return (
        <div className={`nes-container${title ? ' with-title' : ''}${centered ? ' is-centered' : ''}${dark ? ' is-dark' : ''}`}>
            {title ? <h2 className='title'>{title}</h2> : ''}
            {children}
        </div>
    )
}