import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to="/">Movie Search</Link>
                 
                 <ul>
                    <Link to="/">Home</Link>
                    <Link to="/search-movies">Search</Link>
                    <Link to="/trending">Trending</Link>
                    <Link to="/favorites">Favorites</Link>
                 </ul>
            </nav>
        </header>
    )
}

export default Navbar