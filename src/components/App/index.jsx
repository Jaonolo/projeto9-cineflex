import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from '../Header'
import Home from '../Home'
import Movie from "../Movie"
import Session from '../Session'

import './style.css'

const App = () => 
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/filme/:movieId" element={<Movie />}></Route>
            <Route path="/sessao/:sessionId" element={<Session />}></Route>
        </Routes>
    </BrowserRouter>

export default App