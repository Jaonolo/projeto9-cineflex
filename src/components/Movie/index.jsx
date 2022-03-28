import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Footer from '../Footer'

import './style.css'

const Movie = ({options}) => {
    const [sessions, setSessions] = useState([])
    const {movieId} = useParams()
    const [selection, setSelection] = options

    useEffect(
        () => axios
                .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
                .then(({data}) => setSessions(data.days))
    , [])
    
    return <main className="movie">
        <h1>Selecione o Horário</h1>
        <div>
            {sessions.map(ev => <>
                    <h2>{ev.weekday} - {ev.date}</h2>
                    <div>
                        {ev.showtimes.map(e => <Link to={`/sessao/${e.id}`}
                            onClick={() => setSelection({...selection, session: {weekday: ev.weekday, date: ev.date, time: e.name}})}
                        >
                                <button>{e.name}</button>
                            </Link>
                        )}
                    </div>
                </>
            )}
        </div>
        <Footer 
            cover = {selection.movie.cover} 
            title = {selection.movie.title}
            session = {selection.session}
        />
    </main>
}

export default Movie