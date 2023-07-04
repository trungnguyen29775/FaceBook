import './home.css'
import React from 'react'
import { BsSearch,BsMessenger,BsCameraVideoFill,BsPencilSquare,BsFillPeopleFill,BsLink45Deg } from "react-icons/bs";
import { IoNotifications,IoApps } from "react-icons/io5";
import {AiOutlineGif,AiOutlineCamera,AiOutlineComment,AiOutlineLike,AiOutlineGlobal,AiOutlineLeft,AiOutlineRight, AiOutlinePlus,AiOutlineUserSwitch,AiOutlineDown,AiFillHome,AiFillFlag,AiOutlineNotification } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { IoIosMore,IoIosBook } from "react-icons/io";
import { BiShare,BiExpand,BiMoviePlay } from "react-icons/bi";
import {FaRegCommentAlt, FaTv,FaUserFriends } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineGif } from "react-icons/hi";
import { LuSticker } from "react-icons/lu";
class  Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            messType:"personal",
            displayReelScrollLeftButton:false,
        }
        this.handleReelsScrollLeft = this.handleReelsScrollLeft.bind(this)
        this.handleHideNotifiDropTab = this.handleHideNotifiDropTab.bind(this)
        this.activeNotifiDropTab = this.activeNotifiDropTab.bind(this)
        this.handleHideMessDropTab = this.handleHideMessDropTab.bind(this)
        this.activeMessDropTab = this.activeMessDropTab.bind(this)
        this.hideInputTab = this.hideInputTab.bind(this)
        this.handleClickInput = this.handleClickInput.bind(this)
        this.handleReelsScrollRight = this.handleReelsScrollRight.bind(this)
    }
    componentDidMount()
    {
        
       
        if(!this.props.isLogged)
            <this.props.navigation replace to="/"/>
    }
    activeNotifiDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        const notifiIcon  = document.querySelector('.nav-icon--padding.notification')
        const notifiDropTab = document.querySelector('.notifi-droptab-container')
        if(notifiDropTab.classList[1] =="active")
        {
            notifiDropTab.classList.remove('active')
            notifiIcon.classList.remove('active')
        }
        else 
        {
            notifiDropTab.classList.add('active')
            notifiIcon.classList.add('active')
        }
    }
    handleHideNotifiDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        document.addEventListener('click',(event)=>
        {
            event.preventDefault()
            const notifiIcon  = document.querySelector('.nav-icon--padding.notification')

            const notifiDropTab = document.querySelector('.notifi-droptab-container')
            notifiDropTab.classList.remove('active')
            notifiIcon.classList.remove('active')

        })
    }
    handleHideMessDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        document.addEventListener('click',(event)=>
        {
            event.preventDefault()
            const messIcon  = document.querySelector('.nav-icon--padding.mess')

            const messDropTab = document.querySelector('.mess-droptab-container')
            messDropTab.classList.remove('active')
            messIcon.classList.remove('active')

        })
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

    handleReelsScrollRight(event)
    {
        event.stopPropagation()
        event.preventDefault()
        const slideContainer = document.querySelector('.home-reels')
        slideContainer.scrollBy({
            left: 200,
            behavior: 'smooth'
          });
        this.setState({displayReelScrollLeftButton:true})
    }
    handleReelsScrollLeft(event)
    {
        event.stopPropagation()
        event.preventDefault()
        const slideContainer = document.querySelector('.home-reels')
        slideContainer.scrollBy({
            left: -200,
            behavior: 'smooth'
          });
        const scrollPosition = slideContainer.scrollLeft;
        console.log(scrollPosition)
        if(scrollPosition<=200)
            this.setState({displayReelScrollLeftButton:false})
        else
            this.setState({displayReelScrollLeftButton:true})
    
    }

    activeMessDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        
        const messIcon  = document.querySelector('.nav-icon--padding.mess')
        const messDropTab = document.querySelector('.mess-droptab-container')
        if(messDropTab.classList[1] =="active")
        {
            messDropTab.classList.remove('active')
            messIcon.classList.remove('active')
        }
        else 
        {
            messDropTab.classList.add('active')
            messIcon.classList.add('active')
        }
    }
    render()
    {
        const userSrcImg = "assets/image/avt-user-login.jpg";
        const userStatusImg = "assets/image/user-status-image.jpg";
        
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
                                <img src={userSrcImg} className='home-avt__img smaller'/>
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
                            <img className='home-avt__img' src={userSrcImg} alt="avatar user"/>
                            <AiOutlineDown style={{position:"absolute",height:"12px",width:"12px",borderRadius:"6px",backgroundColor:"#3A3B3C",bottom:0,right:0,padding:"auto"}}/>
                        </div>
                       
                        <div  className='nav-icon--padding notification' onClick={this.activeNotifiDropTab} onMouseLeave={this.handleHideNotifiDropTab}>
                        <IoNotifications style={{margin:"auto"}}/>
                        <div className='notifi-droptab-container'>
                            <div className='home-notifi-header-container'>
                            <h1>Thông báo</h1>
                            <div className='notifi-icon-mode-container'>
                                <div className='notifi-icon-mode'>
                                    <IoIosMore style={{margin:"auto"}}/>
                                </div>
                            </div>
                            </div>
                           
                        <div className='notifi-type-container'>
                            <button className='notifi-type active'>Tất cả</button>
                            <button className='notifi-type'>Chưa đọc</button>

                        </div>
                        <div className='notifi-container'>
                            <div className='notifi-zone-container'>
                                    <div className='zone-header-container'>
                                    <span>Lời mời kết bạn</span>
                                    <a className='drop-tab-see-all' href='#'>Xem tất cả</a>
                                    </div>
                                    
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã gửi cho bạn lời mời kết bạn</span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    <div className='zone-button-container'>
                                        <button className='active'>Xác nhận</button>
                                        <button>Xóa</button>
                                    </div>
                                    </div>
                                    </div>
                                
                                <div>
                                </div>
                            </div>
                            <div className='notifi-zone-container'>
                                    <div className='zone-header-container'>
                                    <span>Trước đó</span>
                                    <a className='drop-tab-see-all' href='#'>Xem tất cả</a>
                                    </div>
                                    
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src={userSrcImg} alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                
                                <div>
                                </div>
                            </div>
                            
                            
                        </div>
                        </div>
                        </div>
                        <div className='nav-icon--padding mess' onClick={this.activeMessDropTab} onMouseLeave={this.handleHideMessDropTab}>
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
                        <div className='mess-container'>
                            <div className='mess-item-container'>
                                <img className='mess-avt-user' src={userSrcImg} alt='avt-user'/>
                                <div className='mess-item-detail'>

                                    <span className='mess-item-name'>LT - Sao chổi Tournament</span>
                                    <div className='mess-item-message-and-time-container'>
                                    <span className='mess-item-message'>Bạn: Chay traaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaon sao choi .</span> 
                                    <span className='mess-item-time'>18 phút</span>

                                    </div>
                                </div>
                                <img className='mess-avt-user smaller' src={userSrcImg} alt='avt-user'/>
                                <div className='mess-item-more'>
                                    <IoIosMore style={{margin:"auto"}}/>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className='mess-footer'>
                            <a href='#'>Xem tất cả trong Messenger</a>
                        </div>
                        </div>

                        </div>
                    </div>
                </nav>
            <div className='home-content-container'>
                {/* left side bar */}

                <div className='home-left-side-bar-container'>
                    <div className='left-side-header'>
                        <div className='home-left-side-bar-item-container'>
                        <div className='left-side-bar-active-bar'></div>
                        <AiFillHome className='left-side-bar-icon'/>
                        <span className='side-bar-item__span'>Trang chủ</span>
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <img src={userSrcImg} className='home-avt__img bar'/>
                            <span className='side-bar-item__span'>Trung Nguyễn</span>
                        </div>
                    </div>
                    <div className='left-side-bar-feature-container'>
                        <div className='home-left-side-bar-item-container'>
                            <FaTv className='left-side-bar-icon'/>
                            <span className='side-bar-item__span'>Watch</span>
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <FaUserFriends className='left-side-bar-icon'/>
                            <span className='side-bar-item__span'>Bạn bè</span>
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <AiFillFlag className='left-side-bar-icon'/>
                            <span className='side-bar-item__span'>Trang</span>
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <TbBuildingWarehouse className='left-side-bar-icon'/>
                            <span className='side-bar-item__span'>Marketplace</span>
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <IoApps className='left-side-bar-icon'/>
                            <span className='side-bar-item__span'>Xem Tất cả</span>
                        </div>
                    </div>
                    <div className='left-side-bar-feature-container'>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        
                        <div className='home-left-side-bar-item-container'>
                            
                            <BsFillPeopleFill className='left-side-bar-icon' />
                            <spann className='side-bar-item__span'>Xem tất cả các nhóm</spann>
                            </div>
                    </div>
                    <div className='left-side-bar-feature-container last'>
                    <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>

                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>

                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <span className='side-bar-item-new'></span>
                            <img src= {userSrcImg} className='home-avt__img bar-page' />
                            <span className='side-bar-item__span'>IU Start up Demo days</span>                            
                        </div>
                        <div className='home-left-side-bar-item-container'>
                            <BsLink45Deg className='left-side-bar-icon'/>
                            <span className='side-bar-item__span'>Xem tất cả lối tắt</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    
                </div>
                <div className='new-feed-right-side-bar-container'>
                {/* new feed */}

                <div className='home-new-feed-container'>
                    {/* Reels */}
                    <div className='home-reels-container'>
                    <button className='reel-arrow-right' onClick={this.handleReelsScrollRight}>
                                <AiOutlineRight style={{margin:"auto", fontWeight:600}}/>
                            </button>
                            
                            <button className='reel-arrow-left' style={{display:this.state.displayReelScrollLeftButton?'flex':'none'}} onClick={this.handleReelsScrollLeft}>
                                <AiOutlineLeft style={{margin:"auto", fontWeight:600}}/>
                            </button>
                        <div className='reels-nav-container'>
                            <div className='reels-nav'>
                                <div className='reel-nav-center active'>
                                    <IoIosBook style={{fontSize:"24px",marginRight:"8px"}}/> <span>Tin</span>
                                
                                </div>
                                <div className='reel-nav-active'></div>
                            </div>
                            <div className='reels-nav'>
                                <div className='reel-nav-center'>
                                <BiMoviePlay style={{fontSize:"24px",marginRight:"8px"}}/> <span>Reels</span>

                                </div>
                            </div>
                            <div className='reels-nav'>
                                <div className='reel-nav-center'>
                                <BsCameraVideoFill style={{fontSize:"24px",marginRight:"8px"}}/> <span>Phòng họp mặt</span>

                                </div>

                            </div>
                        </div>
                        <div className='home-reels'>
                            
                            <div className='reel-block-bar'>

                            </div>
                            <div className='reel'>
                                <div className='avt-user-icon-container current'>
                                 <img className='reel-avt-user current'  alt='avt user'src={userSrcImg}/>
                                </div>
                                <div className='reel-plus-container'>
                                        <AiOutlinePlus className='reel-plus__icon'/>
                                    </div>
                                <div className='reel-title-container'>
                                    Tạo tin
                                </div>
                                
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                            <div className='reel'>
                                
                                <div className='avt-user-icon-container other'>
                                <div className='reel-avt-user other'>
                                    <img className='avt-user other' src={userSrcImg} />
                                </div>
                                 <img className='reel-background' alt='avt user'src={userSrcImg}/>
                                </div>
                                <span className='reel-name-user'>Trung Nguyen</span>
                            </div>
                        </div>
                    </div>
                    {/* Status */}
                    <div className='home-status-container'>
                        <div className='status-header'>
                            <img type="text" className='home-avt__img' src={userSrcImg} alt="avatar user"/>
                            <input className='status__input' placeholder='Nguyễn ơi bạn đang nghĩ gì thế'/>

                        </div>
                        <div className='line-through status'></div>
                        <div className='status-action-container'>
                            <div className='status-action'>
                                <div className='status-action--center'>
                                <img alt='status icon' className='status-icon__img' src='https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png'/>
                                <span>Video trực tiếp</span>
                                </div>
                           
                            </div>
                            <div className='status-action'>
                                <div className='status-action--center'>
                                <img alt='status icon' className='status-icon__img' src='https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png'/>
                                <span>Ảnh/video</span>
                                </div>
                                
                            </div>
                            <div className='status-action'>
                                <div className='status-action--center'>
                                <img  alt='status icon' className='status-icon__img' src='https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png'/>
                                <span>Cảm xúc/hoạt động</span>
                                </div>
                               
                            </div>

                        </div>
                    </div>

                     {/* New feed */}

                    <div className="new-feed-container">
                        <div className='new-feed-header'>
                            <div className='new-feed-header-avt-detail'>
                                <img src={userSrcImg} className='home-avt__img'/>
                            <div className='new-feed-header-detail'>
                                    <span className='new-feed-header-detail-name-user'>Trung Nguyen</span>
                                    <span className='new-feed-header-detail-date'>4 Tháng 2, 2022 <span className='dot-seperate'>.</span><AiOutlineGlobal style={{margin:"auto"}}/></span>
                            </div>
                            </div>
                            <div className='new-feed-more-icon-container'>
                                <IoIosMore style={{fontSize:"20px",margin:"auto"}}/>
                            </div>
                        </div>
                        <div className='new-feed-content-container'>
                            <span className='new-feed-status'>Hello</span>
                            <img className='new-feed-user-status__img' src={userStatusImg} alt='status image'/>
                        </div>
                        <div className='new-feed-react-comment-count-container'>
                            <div className='new-feed-react-container'>
                                <div className='new-feed-react'>
                                    <img className='new-feed-reacted__img' src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e" />
                                    <img className='new-feed-reacted__img' src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"/>
                                    <img  className='new-feed-reacted__img' src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"/>
                                </div>
                                <div className='new-feed-user-react-container'>
                                    <span>Lan Anh, Trần Tài và 61 người khác</span>
                                </div>
                            </div>
                            <span>26 bình luận</span>
                            
                        </div>
                        {/* Post Action */}
                        <div className='line-through status new-feed'>


                        </div>

                        <div className='new-feed-action-container'>
                            <div className='new-feed-action'>
                                <div className='new-feed-action--center'>
                                <AiOutlineLike style={{fontSize:"18px",padding:"6px 4px"}}/>
                                <span>Thích</span>
                                </div>
                           
                            </div>
                            <div className='new-feed-action'>
                            <div className='new-feed-action--center'>
                            <AiOutlineComment style={{fontSize:"18px",padding:"6px 4px"}}/>
                            <span>
                                Bình luận
                            </span>
                            </div>
                           
                            </div>
                            
                            <div className='new-feed-action'>
                                <div className='new-feed-action--center'>
                                <BiShare style={{fontSize:"18px",padding:"6px 4px"}}/>
                                <span>Chia sẻ</span>
                                </div>
                                
                            </div>
                        </div>

                        <div className='line-through status new-feed'>
                        </div>

                        
                        {/* Comment */}
                        <div className='new-feed-comment-container'>
                            <div className='new-feed-more-comment-container'>
                                <span>Xem thêm bình luận</span>
                            </div>
                            <div className='new-feed-users-comment-container'>
                                <div className='new-feed-user-comment'>
                                <div className='comment-avt-user-container'>
                                    <img src={userSrcImg} className='home-avt__img comment' alt='avatar user' />
                                </div>
                                <div className='comment-detail-container'>
                                    <span className='comment-name-user'>Trung Nguyen</span>
                                    <div className='commment-content-container'>
                                        <span className='comment-content'>siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</span>
                                        <img className='comment__img' alt='comment image' src={userStatusImg}/>
                                    </div>
                                    <div className='comment-action-time-container'>
                                            <span>Thích</span>
                                            <span>Phản hồi</span>
                                            <span style={{fontWeight:400}}>1 năm</span>
                                                                                
                                    </div>
                                </div>
                                
                                </div>
                                
                            </div>
                            <div className='new-feed-comment-input-container'>
                                    <img src={userSrcImg} className='home-avt__img comment'/>
                                    <div className='comment-input-wrap'>
                                        <textarea placeholder='Viết bình luận'></textarea>
                                        <div className='comment-type__icon'>
                                            
                                            <div className='comment-type__icon--padding'>
                                            <RiEmotionHappyLine  style={{margin:"auto"}}/>
                                            
                                            </div>

                                            <div className='comment-type__icon--padding'>
                                            <AiOutlineCamera  style={{margin:"auto"}}/>
                                            
                                            </div>
                                            <div className='comment-type__icon--padding'>
                                            <AiOutlineGif  style={{margin:"auto"}}/>
                                            
                                            </div>
                                            <div className='comment-type__icon--padding'>
                                            <LuSticker style={{margin:"auto"}} />
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>  
                </div>


                                 


                    {/* rigt side bar */}
                <div className='home-right-side-bar-container'>
                    <div className='right-side-bar-header-container'>
                        <div className='right-side-bar-header'>
                            <span>Trang và trang cá nhân của bạn</span>
                            <div className='right-side-bar-icon-container'>
                                <IoIosMore className='right-sidebar-icon' />

                            </div>
                        </div>
                        <div className='right-side-bar-user-page-container'>
                            <img alt='user page image' src={userSrcImg} className='user-page__img'/>
                            <span className='user-page-name'>Another well well well Universe</span>
                        </div>
                        <div className='right-side-bar-user-page-control'>
                            <div className='right-side-control-item-container'>
                                <IoNotifications style={{fontSize:"20px",padding:"6px"}}/>
                                <span>1 Thông báo</span>
                            </div>
                            <div className='right-side-control-item-container'>
                                <AiOutlineUserSwitch style={{fontSize:"20px",padding:"6px"}}/>
                                <span>Chuyển sang trang</span>
                            </div >
                            <div className='right-side-control-item-container'>
                                <AiOutlineNotification style={{fontSize:"20px",padding:"6px"}}/>
                                <span>
                                    Tạo quảng cáo
                                </span>
                            </div>

                        </div>
                        <div className='right-side-bar-contact-container'>
                            <div className='contact-header'>
                                <span>
                                    Người liên hệ
                                </span>
                                <div className='contact-header-action-container'>
                                    <div className='contact-action-icon'>
                                    <BsCameraVideoFill style={{margin:"auto"}}/>

                                    </div>
                                    <div className='contact-action-icon'>
                                    <BsSearch style={{margin:"auto"}}/>

                                    </div>
                                    <div className='contact-action-icon'>
                                    <IoIosMore style={{margin:"auto"}}/>

                                    </div>
                                </div>
                            </div>
                            <div className='contact-users-container'>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>
                                <div className='contact-user'>
                                    <img src={userSrcImg} className='contact-user__img' alt='avt user'/>
                                    <span>Trung Nguyen</span>
                                </div>

                                
                               
                                
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                


                
            </div>


            </div>
        )
    }
}
export default Home