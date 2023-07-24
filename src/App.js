import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import Login from './components/login/login';
import LoginContext from './store/context';
import Home from './components/home/home';
function App() {
    const [loginState, dispatchLogin] = useContext(LoginContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route
                    path="/"
                    element={loginState == 'loggedIn' ? <Navigate to="/home" replace={true} /> : <Login />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
