
const MovieCard = ({movie}) => {
  return (
    <>
    <div className='movie'>
        <div className="movieYear">
            <p>{movie.Year}</p>
        </div>
        <div className="moviePoster">
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <span>{movie.Type}</span>
        </div>
        
    </div>
    </>
  )
}

export default MovieCard
