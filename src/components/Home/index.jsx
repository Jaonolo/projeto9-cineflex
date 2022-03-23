import './style.css'

const movies = [
    {},
    {},
    {},
    {},
]

const Home = () => <main class="home">
    <h1>Selecione o filme</h1>
    <div>
        {movies.map((e, i) => <img 
            src={e.src}
            key={`movie-${i}`}
        />)}
    </div>
</main>

export default Home