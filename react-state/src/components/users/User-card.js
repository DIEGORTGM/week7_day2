import React from 'react'

const UserCard = ({ name, image, color }) => {
    return (
        <>
            <article className="user-card">
                <img alt={name} src={image} style={{ width: '200px' }} />
                <h3 style={{ color: color }}>{name}</h3>
            </article>
            <hr></hr>
        </>
    )
}

export default UserCard