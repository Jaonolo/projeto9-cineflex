import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from '../Header'
import Home from '../Home'
import Movie from "../Movie"

import './style.css'

const App = () => 
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/filme/:movieId" element={<Movie />}></Route>
        </Routes>
    </BrowserRouter>

export default App