import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
 
import './style.css'

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(
        () => axios
                .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
                .then(({data}) => setMovies(data))
    , [])
    
    return <main className="home">
        <h1>Selecione o filme</h1>
        <div>
            {movies.map(e =>
                <Link to={`/filme/${e.id}`} key={`movie-${e.id}`}>
                    <div className="frame"> 
                        <img src={e.posterURL} alt={`movie-${e.id}`}/>
                    </div>
                </Link>
            )}
        </div>
    </main>
}

export default Home