import { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard.jsx'

//3ac549ae
const API_URL = 'http://www.omdbapi.com/?apikey=3ac549ae'

const movie = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg"
}
function App() {

  const [movies, setMovies] = useState([])

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie("batman")
  }, [])

  return (
    <>
      <div className="app">
        <h1>CineFind</h1>
        <div className='search'>
          <input placeholder='Search for Movies' value='Batman' onChange={() => { }} />
          <img src={SearchIcon} alt="search" onClick={() => { }} />
        </div>

        {movies?.length>0?(
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found!</h2>
          </div>
        )}


      </div>
    </>
  )
}

export default App
