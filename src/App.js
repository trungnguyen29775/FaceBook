import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import LoginContext from './store/loginContext';
import Home from './components/home/home';
function App() {
    const [loginState, dispatchLogin] = useContext(LoginContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={loginState == 'LOGGED_IN' ? <Home /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
