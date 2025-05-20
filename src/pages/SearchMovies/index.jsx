import { useState } from 'react'
import { FadeLoader } from "react-spinners";
import SearchResults from '../../components/SearchResults';
import './index.css'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const SearchMovies = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [onSearch, setOnSearch] = useState(false)

    const handleSearch = e => {
        e.preventDefault()
        setIsLoading(true)
        setOnSearch(true)

        const getTrailerKey = async movieId => {
            const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
            try {
                const res = await fetch(url)
                const jsonData = await res.json()
                const results = jsonData.results.find(movieVideo => movieVideo.type === 'Trailer' && movieVideo.site === 'YouTube')
                if (results) return results.key
            } catch (err) {
                console.error(err)
            }
        }

        const fetchMovies = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`
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
                    <SearchResults searchResults={searchResults} onSearch={onSearch} />
                }
            </div>
        </section>
    )
}

export default SearchMovies