import React from 'react'

export default ({text, onClick, primary, success, warning, error, disabled}) => {
    let cName = `nes-btn` +
    (primary?' is-primary':'') +
    (success?' is-success':'') +
    (warning?' is-warning':'') +
    (error?' is-error':'') +
    (disabled?' is-disabled':'')

    return <button className={cName} onClick={onClick} type='button'>{text}</button>
}