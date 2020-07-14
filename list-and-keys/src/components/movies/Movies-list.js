import React, { Component } from 'react'

import { movies as moviesFromApi } from './../statisLists/static-lists'

import MovieCard from './Movie-card'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: moviesFromApi,
            showOscarAwarded: false
        }
    }

    deleteMovie = id => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(id, 1)
        this.setState({ movies: moviesCopy })
    }

    toggleMoviesFilter = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded })

    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscar === this.state.showOscarAwarded)

        return (
            <>
                <h1>Películas {this.state.showOscarAwarded ? 'con Oscar' : 'sin Oscar'}</h1>

                {filteredMovies.map((elm, idx) => <MovieCard removeMovie={() => this.deleteMovie(idx)} {...elm} key={idx} />)}

                <button onClick={this.toggleMoviesFilter}>Ver películas {this.state.showOscarAwarded ? 'sin Oscar' : 'con Oscar'}</button>
            </>
        )
    }
}

export default MoviesList