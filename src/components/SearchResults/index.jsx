import MovieCard from '../../components/MovieCard';
import './index.css'

const SearchResults = props => {
    const { searchResults, onSearch } = props
    const searchResultText = onSearch? "No search results found" : "Search for movies"

    return (
        <>
            {searchResults.length > 0
            ? searchResults.map((movie, index) => <MovieCard key={index} movie={movie} />) 
            : <p style={{textAlign: "center"}}  >{searchResultText}</p>}
        </>
    )
}

export default SearchResults