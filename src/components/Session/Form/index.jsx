import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [form, setForm] = useState({}) 

    const navigate = useNavigate()

    const submitForm = e => {
        e.preventDefault()
        navigate("/", {state: form})
    }

    return <form onSubmit={submitForm}>
        <label htmlFor="">Nome do comprador</label>
        <input placeholder='Digite seu nome...' type="text" onChange={e => setForm({...form, name: e.target.value})}/>
        <label htmlFor="">CPF do comprador</label>
        <input placeholder='Digite seu CPF...' type="text" onChange={e => setForm({...form, cpf: e.target.value})}/>
        <button type="submit"></button>
    </form>
}

export default Form