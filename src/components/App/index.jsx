import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from '../Header'
import Home from '../Home'
import './style.css'

const App = () => <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
</BrowserRouter>

export default App