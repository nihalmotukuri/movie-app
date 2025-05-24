import { useState, useEffect } from 'react'
import './index.css'
import MovieCard from '../../components/MovieCard'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const Trending = () => {
    const [trending, setTrending] = useState([])

    useEffect(() => {

        const fetchTrailerVideos = async (movieId) => {
            const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
            try {
                const res = await fetch(url)
                const data = await res.json()
                const results = data.results
                return results
            } catch (err) {
                console.log(err)
            }
        }

        const fetchTrending = async () => {
            const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
            try {
                const res = await fetch(url)
                const data = await res.json()
                const results = data.results
                const movieDetails = await Promise.all(
                    results.map(async (movie) => {
                        const trailerVideos = await fetchTrailerVideos(movie.id)
                        const trailer = trailerVideos.find(
                            movieVideo => movieVideo.site === "YouTube" && movieVideo.type === "Trailer"
                        )
                        const trailerKey = trailer ? trailer.key : null
                        if (!trailerKey) return null
                        return {
                            ...movie,
                            trailerKey
                        }
                    })
                )
                console.log(movieDetails)
                const validMovies = movieDetails.filter(movie => movie !== null)
                setTrending(validMovies)
            } catch (err) {
                console.error(err)
            }
        } 

        fetchTrending()
    }, [])

    return (
        <section>
            <h1 className="heading">TRENDING</h1>
            <div className="trending-container">
                {trending.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                {/* {console.log(trending)} */}
            </div>
        </section>
    )
}

export default Trending