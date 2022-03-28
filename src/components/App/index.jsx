import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'

import Header from '../Header'
import Home from '../Home'
import Movie from "../Movie"
import Session from '../Session'
import Success from '../Success'


import './style.css'

const App = () => {
    const [selection, setSelection] = useState({
        movie: {cover: '', title: ''},
        session: ''
    })

    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home options={[selection, setSelection]}/>}></Route>
            <Route path="/filme/:movieId" element={<Movie options={[selection, setSelection]}/>}></Route>
            <Route path="/sessao/:sessionId" element={<Session options={[selection, setSelection]}/>}></Route>
            <Route path="/sucesso" element={<Success options={[selection, setSelection]}/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default App