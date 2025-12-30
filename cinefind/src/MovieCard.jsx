import posterNA from './assets/poster-na.png'
const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
  return (
    <>
    <div className='movie' key={imdbID}>
        <div className="movieYear">
            <p>{Year}</p>
        </div>
        <div className="moviePoster">
            <img src={Poster!== "N/A" ? Poster : posterNA } alt={Title}/>
        </div>
        <div className="movie-info">
            <h3>{Title}</h3>
            <span>{Type}</span>
        </div>
        
    </div>
    </>
  )
}

export default MovieCard
