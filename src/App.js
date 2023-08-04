import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import AuthenContext from './store/authenContext';
import Home from './components/home/home';
function App() {
    const [authenState, dispatchAuthenState] = useContext(AuthenContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={authenState.loginState == 'LOGGED_IN' ? <Home /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
