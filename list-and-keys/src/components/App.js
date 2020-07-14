import React from 'react'

// API-like data
import { drinks, movies } from './statisLists/static-lists'
import MoviesList from './movies/Movies-list'

const App = () => {
  return (

    <main>

      <section>

        <MoviesList />

      </section>

      <section>

        <h1>Bebidas (estáticas)</h1>
        <ul>
          {drinks.map((elm, idx) => <li key={idx}>{elm}</li>)}
        </ul>

      </section>


      <section>

        <h1>Pelis (estáticas)</h1>
        <ul>
          {movies.map((elm, idx) => <li key={idx}>{elm.title}</li>)}
        </ul>

      </section>

    </main>
  )
}

export default App;
