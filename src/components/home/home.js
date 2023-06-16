import './home.css'
import React from 'react'

class  Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {

        }
    }
    componentDidMount()
    {
        console.log(this.props.isLogged)
        if(!this.props.isLogged)
            <this.props.navigation replace to="/"/>
    }
    render()
    {
        return(
            <div className='home-container'>

            </div>
        )
    }
}
export default Home