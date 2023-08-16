import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Login from './pages/Login';
import Player from './pages/Player';
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/player' element={<Player />} />
                <Route path='/' element={<Netflix />} />
            </Routes >
        </Router >
    );
}

export default App;