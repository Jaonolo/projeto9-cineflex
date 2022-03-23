import axios from 'axios'
import { useState } from 'react'

import './style.css'

const Home = () => {
    const [movies, setMovies] = useState([])

    axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies').then(response => setMovies(response.data))

    return <main className="home">
        <h1>Selecione o filme</h1>
        <div>
            {movies.map((e, i) =>
                <div className="frame"> 
                    <img src={e.posterURL} key={`movie-${i}`}/>
                </div>
            )}
        </div>
    </main>
}

export default Home