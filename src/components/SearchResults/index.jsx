import MovieCard from '../../components/MovieCard';
import './index.css'

const SearchResults = props => {
    const { searchResults, onSearch } = props
    const searchResultText = onSearch? "No search results found" : "Search for movies"

    const displaySearchResults = () => {
        if (searchResults.length > 0) {
            return (
                searchResults.map((movie, index) => {
                    return (
                        <MovieCard 
                            key={index}
                            movie={movie} />
                    )
                })
            )
        }
        return <p>{searchResultText}</p>
    }

    return (
        <>
            {
                searchResults.length > 0?
                    searchResults.map((movie, index) => {
                        return (
                            <MovieCard 
                                key={index}
                                movie={movie} />
                        )
                    }) 
                    :
                    <p>{searchResultText}</p>
            }
        </>
    )
}

export default SearchResults