import { useState } from 'react'
import { FadeLoader } from "react-spinners";
import MovieCard from '../../components/MovieCard';
import './index.css'

const SearchMovies = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = e => {
        e.preventDefault()
        setIsLoading(true)

        const getTrailerKey = async movieId => {
            const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ab2e9fcb961ed38190348436b4044af8`
            try {
                const res = await fetch(url)
                const jsonData = await res.json()
                const results = jsonData.results[0]
                if (results && results.type === 'Trailer') {
                    return results.key
                }
            } catch (err) {
                console.error(err)
            }
        }

        const fetchMovies = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=ab2e9fcb961ed38190348436b4044af8&query=${searchInput}`
            try {
                const res = await fetch(url)
                const jsonData = await res.json()
                const results = jsonData.results
                const movieDetails = await Promise.all(
                    results.map(async movie => {
                        const trailerKey = await getTrailerKey(movie.id)
                        if (!trailerKey) return null
                        return {
                            ...movie,
                            trailerKey
                        }
                }))
                const validMovies = movieDetails.filter(movie => movie !== null)
                console.log(validMovies)
                setSearchResults(validMovies)
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovies()
    }

    return (
        <section className='search-section'>
            <form 
                className="search-component"
                onSubmit={handleSearch}>
                <input 
                    type="search"
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder='Search movies' />
                <button type="submit" >Search</button>
            </form>

            <div className="movies-container">
                {isLoading? 
                    <FadeLoader
                        loading={isLoading}
                        size={100}
                        color="grey"
                        cssOverride={{
                            display: 'block',
                            margin: '100px auto',
                            borderColor: '#007bff'
                        }}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> 
                    :
                    searchResults.map((movie, index) => {
                        return (
                            <MovieCard 
                                key={index}
                                movie={movie} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SearchMovies