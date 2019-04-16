import React from 'react'

export default ({star, empty, heart, like, small, medium, large, half, transparent}) => {
    let cName = `nes-icon` +
    (star?' star':'') +
    (heart?' heart':'') +
    (like?' like':'') +
    (small?' is-small':'') +
    (medium?' is-medium':'') +
    (large?' is-large':'') +
    (half?' is-half':'') +
    (empty?' is-empty':'') +
    (transparent?' is-transparent':'')

    return <i className={cName}></i>
}