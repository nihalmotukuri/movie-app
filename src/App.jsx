import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchMovies from './pages/SearchMovies'
import Trending from './pages/Trending'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetails'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-movies' element={<SearchMovies />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/movie-details' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
