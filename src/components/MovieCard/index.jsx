import './index.css'

const MovieCard = props => {
    const {movie} = props

    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie_poster" />
        </div>
    )
}

export default MovieCard