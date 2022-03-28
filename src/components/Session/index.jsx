import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Form from './Form'
 
import './style.css'

const Session = () => {
    const [seats, setSeats] = useState([])
    const {sessionId} = useParams()

    useEffect(
        () => axios
                .get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
                .then(({data}) => setSeats(data.seats
                    .map((e, i) => { 
                        return { 
                            jsx: <div className={"seat" + (e.isAvailable ? '' : ' occupied')} onClick={() => this.selectSeat()}>
                                {(i + 1 + '').padStart(2, '0')}
                            </div>, 
                            selected: false,
                            selectSeat() {
                                console.log(this.selected)
                                /*if(seats[i].selected) {
                                    console.log('remove')
                                }
                                else {
                                    console.log('add')
                                }*/
                            }
                        }
                    })
                ))
    , [])

    
    
    return <main className="session">
        <h1>Selecione os Assentos</h1>
        <div>
            {seats.map(e => e.jsx)}
        </div>
        <div className="example">
            {[['Selecionado', 'selected'], ['Disponível', ''], ['Indisponível', 'occupied']].map(e => 
                <div>
                    <div className={`seat ${e[1]}`}></div>
                    <p>{e[0]}</p>
                </div>
            )}
        </div>
        <Form/>
    </main>
}

export default Session