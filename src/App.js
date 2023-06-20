import React from "react";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from "./components/home/home";
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      isLogged: true
    }
    this.changeStateLogged = this.changeStateLogged.bind(this)
  }
  changeStateLogged()
  {
    this.setState({isLogged: !this.setState.isLogged})
  }
  render()
  {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
        
          this.state.isLogged?
            (<Navigate replace to="/home"/>)
          :(<Login isLogged = {this.state.isLogged} changeStateLogged = {this.changeStateLogged} navigation = {Navigate}/>)
        }/>
        <Route path="/home" element={<Home/>} navigation = {Navigate} isLogged = {this.state.isLogged}/>
      </Routes>
    </BrowserRouter>
    );
  }
  
}

export default App;
