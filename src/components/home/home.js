import './home.css'
import React from 'react'
import { BsSearch,BsMessenger } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { FiX } from "react-icons/fi";
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
                <nav className='nav'>
                    <a className='nav-logo__a' href='/home'>facebook</a>
                    <div className='nav-search-container'>
                        <BsSearch/>
                        <input className='home-search__input' placeholder='Tìm kiếm trên Facebook'/>

                        {/* Search  tab */}
                        <div>
                            <div>
                                <span>Gần đây</span>
                                <span>Chỉnh sửa</span>
                            </div>
                            <div>
                                <img src='assets/image/avt-user-login.jpg' className='home-avt__img smaller'/>
                                <FiX  style={{position: "absolute",fontSize:"12px", fontWeight:600,color:"white",top:"4px", left:"4px", padding:"2px",backgroundColor:"#4b4f56",borderRadius:"10px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className='home-icon-container'>
                    <div className='nav-img-icon-container'>
                            <img className='home-avt__img' src='assets/image/avt-user-login.jpg' alt="avatar user"/>
                            <AiOutlineDown style={{position:"absolute",height:"12px",width:"12px",borderRadius:"6px",backgroundColor:"#3A3B3C",bottom:0,right:0,padding:"auto"}}/>
                        </div>
                       
                        <div  className='nav-icon--padding'>
                        <IoNotifications style={{margin:"auto"}}/>

                        </div>
                        <div className='nav-icon--padding'>
                        <BsMessenger style={{margin:"auto"}} />

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Home