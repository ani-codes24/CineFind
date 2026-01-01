import { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard.jsx'

// const API_URL = 'http://www.omdbapi.com/?apikey=3ac549ae'
const apiKey = import.meta.env.VITE_OMDB_API_KEY; //ready for deploy in vercel

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie("avengers")
  }, [])

  return (
    <>
      <div className="app">
        <h1>CineFind</h1>
        <div className='search'>
          <input placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
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
