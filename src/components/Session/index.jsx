import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Form from './Form'
import Footer from '../Footer'

import './style.css'

const Session = ({options}) => {
    const [seats, setSeats] = useState([])
    const {sessionId} = useParams()
    const [selection, setSelection] = options

    useEffect(
        () => axios
                .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
                .then(({data}) => setSeats(data.seats.map(e => {
                    return {
                        seat: e, selected: false
                    }
                })))
    , [])

    const selectSeat = i => {
        if(seats[i].seat.isAvailable)
        {
            let a = [...seats]
            a[i].selected = !a[i].selected
            setSeats(a)
        }
        else {
            alert('cadeira ocupada!')
        }
    }
    
    return <main className="session">
        <h1>Selecione o(s) Assento(s)</h1>
        <div>
            {seats.map((e, i) => <div className={"seat" + (e.seat.isAvailable ? '' : ' occupied') + (e.selected ? ' selected' : '')} onClick={() => selectSeat(i)}>
                                {(i + 1 + '').padStart(2, '0')}
                            </div>
                    )}
        </div>
        <div className="example">
            {[['Selecionado', 'selected'], ['Disponível', ''], ['Indisponível', 'occupied']].map(e => 
                <div>
                    <div className={`seat ${e[1]}`}></div>
                    <p>{e[0]}</p>
                </div>
            )}
        </div>
        <Form seats={seats}/>
        <Footer 
            cover = {selection.movie.cover} 
            title = {selection.movie.title}
            session = {selection.session}
        />
    </main>
}

export default Session