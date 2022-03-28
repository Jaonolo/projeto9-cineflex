import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
 
import './style.css'

const Success = ({options}) => {
    const {movie, session} = options[0]
    const {state} = useLocation()
    const {name, cpf, seats} = state

    return <main className="success">
        <h1>Pedido feito com sucesso!</h1>
        <div>
            <h2>Filme e sessão</h2>
            <p>{movie.title}</p>
            <p>{session}</p>
        </div>
        <div>
            <h2>Ingressos</h2>
            {seats.map(e => <p>Assento {e}</p>)}
        </div>
        <div>
            <h2>Comprador</h2>
            <p>Nome: {name}</p>
            <p>CPF: {cpf}</p>
        </div>
        <Link to="/" onClick={() => options[1]({
                movie: {cover: '', title: ''},
                session: ''
            })}
        >
            <button>Voltar para a home</button>
        </Link>
    </main>
}

export default Success