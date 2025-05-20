import { useState, Effect, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

const MovieDetails = () => {
    const location = useLocation()
    const { movie } = location.state

    const ytUrl = `https://www.youtube.com/embed/${movie.trailerKey}`

    return (
        <section>
            <iframe
                width="560"
                height="315"
                src={ytUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {console.log(movie)}
        </section>
    )
}

export default MovieDetails