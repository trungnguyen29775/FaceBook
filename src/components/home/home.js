import './home.css'
import React from 'react'
import { BsSearch,BsMessenger,BsCameraVideoFill,BsPencilSquare } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { BiExpand } from "react-icons/bi";
class  Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            messType:"personal"
        }
        this.handleMessTypeClick = this.handleMessTypeClick.bind(this)
        this.hideInputTab = this.hideInputTab.bind(this)
        this.handleClickInput = this.handleClickInput.bind(this)
    }
    componentDidMount()
    {
        
       
        if(!this.props.isLogged)
            <this.props.navigation replace to="/"/>
    }
    handleClickInput(event)
    {
        event.stopPropagation()
        const droptab = document.querySelector('.nav-search-tab-container')
        droptab.classList.add('active')
        

    }
    hideInputTab(event)
    {
        event.stopPropagation()
        event.preventDefault()
        const droptab = document.querySelector('.nav-search-tab-container')
            document.addEventListener("click", function(event) {
                event.stopPropagation()
                event.preventDefault()
                droptab.classList.remove('active')
              });
    }
    handleMessTypeClick(event)
    {

    }
    render()
    {
        
        return(
            <div className='home-container'>
                <nav className='nav'>
                    <a className='nav-logo__a' href='/home'>facebook</a>
                    <div className='nav-search-container'>
                        <BsSearch/>
                        <input type='search' onMouseLeave={this.hideInputTab} onClick={this.handleClickInput} className='home-search__input' placeholder='Tìm kiếm trên Facebook'/>

                        {/* Search  tab */}
                        <div className='nav-search-tab-container'>
                            <div className='search-title-container'>
                                <span className='search-title__span'>Gần đây</span>
                                <a href='#' className='search-title__a'>Chỉnh sửa</a>
                            </div>
                            <div className='search-target-container'>
                                <img src='assets/image/avt-user-login.jpg' className='home-avt__img smaller'/>
                                <div className='search-target-detail'>
                                    <span >Nguyễn Trần Minh Trung</span>
                                    <span className='search-target-role'>Bạn bè</span>
                                </div>
                                <FiX  style={{fontSize:"15px",color:"rgb(176, 179, 184)"}}/>
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
                        <div className='mess-droptab-container'>
                            <div className='home-mess-header-container'>
                            <h1>Chat</h1>
                            <div className='mess-icon-mode-container'>
                                <div className='mess-icon-mode'>
                                    <IoIosMore style={{margin:"auto"}}/>
                                </div>
                                <div  className='mess-icon-mode'>
                                    <BiExpand style={{margin:"auto"}}/>
                                </div>
                                <div className='mess-icon-mode'>
                                    <BsCameraVideoFill style={{margin:"auto"}}/>
                                </div>
                                <div className='mess-icon-mode'>
                                    <BsPencilSquare style={{margin:"auto"}}/>
                                </div>
                            </div>
                            </div>
                           
                            <div className='mess-search-container'>
                        <BsSearch/>
                        <input type='search' className='mess-search__input' placeholder='Tìm kiếm trên Messenger'/>
                        </div>
                        <div className='mess-type-container'>
                            <button className='mess-type active'>Hộp thư</button>
                            <button className='mess-type'>Cộng đồng</button>

                        </div>
                        <div>
                            <div>
                                <img className='mess-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                <div>
                                    <span>LT - Sao chổi Tournament</span>
                                    <span>Bạn: Chay tron sao choi <span>18 phút</span></span>
                                </div>
                                <img className='mess-avt-user smaller' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                
                            </div>
                        </div>
                        <div>
                            <a href='#'>Xem tất cả trong Messenger</a>
                        </div>
                        </div>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Home