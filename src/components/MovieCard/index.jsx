import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavMovieContext } from '../../contexts/FavoriteMovieContext'
import './index.css'

const MovieCard = ({movie}) => {
    const navigate = useNavigate()
    // const [isFavorite, setIsFavorite] = useState(false)
    const { toggleFavorite, isFavorite } = useFavMovieContext()
    const favColor = isFavorite(movie) ? 'red' : 'white'

    const onMovieCard = () => {
        navigate('/movie-details', {
            state: {movie}
        })
    }

    const onFavorite = e => {
        e.stopPropagation()
        // setIsFavorite(!isFavorite)
        toggleFavorite(movie)
    }

    return (
        <div className="movie-card" onClick={onMovieCard}>
            <img 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                alt={movie.title} 
            />

            <div 
                className="fav-icon" 
                onClick={onFavorite} 
                style={{color: favColor}}>
                ♥
            </div>
        </div>
    )
}

export default MovieCard