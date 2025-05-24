import { useFavMovieContext } from '../../contexts/FavoriteMovieContext.jsx'
import MovieCard from '../../components/MovieCard'
import './index.css'

const Favorites = () => {
    const { favorites } = useFavMovieContext()

    return (
        <section>
            <h1 className="heading">FAVORITES</h1>
            <div className="favorites-container">
                {
                    favorites.length > 0
                    ? favorites.map((movie, index) => <MovieCard key={index} movie={movie} />)
                    : <p style={{textAlign: "center"}} >Add your favorites</p>
                }
            </div>
        </section>
    )
}

export default Favorites