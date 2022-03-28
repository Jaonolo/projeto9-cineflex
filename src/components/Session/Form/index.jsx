import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Form = ({seats}) => {
    const [form, setForm] = useState({})

    const navigate = useNavigate()

    const selectedSeats = seats.filter(e => e.selected).map(e => e.seat.id)

    const submitForm = e => {
        e.preventDefault()
        axios
            .post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
                {
                    ids: selectedSeats,
                    name: form.name,
                    cpf: form.cpf
                }
            )    
            .then(() => navigate("/sucesso", {state: {...form, seats: selectedSeats}}))
            .catch(() => console.log('algo deu ruim ;-;'))
    }

    return <form onSubmit={submitForm}>
        <label htmlFor="">Nome do comprador</label>
        <input placeholder='Digite seu nome...' type="text" onChange={e => setForm({...form, name: e.target.value})}/>
        <label htmlFor="">CPF do comprador</label>
        <input placeholder='Digite seu CPF...' type="text" onChange={e => setForm({...form, cpf: e.target.value})}/>
        <button type="submit">Reservar Assento(s)</button>
    </form>
}

export default Form