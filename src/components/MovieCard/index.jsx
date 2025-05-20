import { useNavigate } from 'react-router-dom'
import './index.css'

const MovieCard = props => {
    const {movie} = props
    const navigate = useNavigate()

    const onMovieCard = () => {
        navigate('/movie-details', {
            state: {movie}
        })
    }

    return (
        <div className="movie-card" onClick={onMovieCard}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie_poster" />
        </div>
    )
}

export default MovieCard