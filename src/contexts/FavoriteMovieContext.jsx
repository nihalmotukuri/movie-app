import { createContext, useContext, useState, useEffect } from 'react'

const FavMovieContext =  createContext()

export const useFavMovieContext = () => useContext(FavMovieContext)

export const FavMovieContextProvider = ({ children }) => {
    const localFavs = JSON.parse(localStorage.getItem('favorites')) || []
    const [favorites, setFavorites] = useState(localFavs)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorite = movie => {
        setFavorites(prev =>
            prev.some(fav => fav.id === movie.id)
                ? prev.filter(fav => fav.id !== movie.id)
                : [...prev, movie]
        )
        console.log(movie)
    }

    const isFavorite = (movie) => favorites.some(fav => fav.id === movie.id)

    const value = {
        favorites,
        toggleFavorite,
        isFavorite
    }

    return (
        <FavMovieContext.Provider value={value}>
            {children}
        </FavMovieContext.Provider>
    )
}