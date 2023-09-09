import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import AuthenContext from './store/authenContext';
import Home from './components/home/home';
import Profile from './components/profile/profile';
function App() {
    const [authenState, dispatchAuthenState] = useContext(AuthenContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={authenState.loginState == 'LOGGED_IN' ? <Home /> : <Login />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
