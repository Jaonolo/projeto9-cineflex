import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
 
import './style.css'

const Movie = () => {
    const [sessions, setSessions] = useState([])
    const {movieId} = useParams()

    useEffect(
        () => axios
                .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
                .then(({data}) => setSessions(data.days))
    , [])
    
    return <main className="movie">
        <h1>Selecione o Horário</h1>
        <div>
            {sessions.map(e => <>
                    <h2>{e.weekday} - {e.date}</h2>
                    <div>
                        {e.showtimes.map(e => <Link to={`/sessao/${e.id}`}>
                                <button>{e.name}</button>
                            </Link>
                        )}
                    </div>
                </>
            )}
        </div>
    </main>
}

export default Movie