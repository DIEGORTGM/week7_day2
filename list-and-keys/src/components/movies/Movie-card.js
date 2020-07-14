import React from 'react'

import './Movie-card.css'

const MovieCard = ({ title, director, removeMovie, hasOscar, rating }) => {
    return (
        <article className="movies-list-item" style={{ background: rating > 4 ? '#006b004a' : '#e8e8e8' }}>
            <h2>{title}</h2>
            <p>Director: {director} {hasOscar && '| Tuvo Oscar!'}</p>
            <button onClick={removeMovie}>Eliminar</button>
        </article>
    )
}

export default MovieCard