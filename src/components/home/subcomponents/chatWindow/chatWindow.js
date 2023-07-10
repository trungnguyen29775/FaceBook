import './chatWindow.css'
import { AiOutlineGif,AiOutlineDown,AiFillPlusCircle,AiFillLike } from "react-icons/ai";
import { HiVideoCamera } from "react-icons/hi2";
import { CgLoadbar } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { FaImages,FaSmile,FaPhoneAlt } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";
import { useEffect, useState } from 'react';

const ChatWindow = function()
{

    const  [data,setData] = useState({
        userId:null,
        userSrcImg:"",
        userName:"",
        mess:{
            currentUser:[
                
            ],
            targetUser:[
                
            ]
        }
    })
    useEffect(()=>
    {
        // call api to get data
        setData({
            userId:1,
            userSrcImg:"assets/image/avt-user-login.jpg",
            userName:"Phúc Lê",
            mess:{
                currentUser:[
                    {
                        mess:"Hello",
    
                    },
                    {
                        mess:"Hello",
                        
                    },
                    {
                        mess:"Hello",
                        
                    },
                    {
                        mess:"Hello",
                        
                    }
                ],
                targetUser:[
                    {
                        mess:"Hello",
                        
                    },
                    {
                        mess:"Hello",
                        
                    },
                    {
                        mess:"Hello",
                        
                    },
                    {
                        mess:"Hello",
                        
                    }
                ]
            }
        })
        console.log(data)
    },[])

    return(
        <div className='mess-window-container'>
            {/* Header */}
            <div className='mess-window-header-container'>
                
                <div className='mess-window-header-user-detail-container'>
                <div className='mess-window-header-avt-container'>
                    <img src={data.userSrcImg} className='mess-window-avt-user'/>
                    <div className='mess-window-active-user__div'></div>
                </div>

                <div className='mess-window-header-status-container'>
                    <div className='mess-window-header-span-container'>
                        <span>{data.userName}</span>
                        <span className='status'>Đang hoạt động</span>
                    </div>
                    <AiOutlineDown style={{fontSize:"10px"}}/>
                </div>
                </div>

                
                
                <div className='mess-window-action-container'>
                    <div className='mess-window-action-icon-container'>
                        <FaPhoneAlt style={{margin:"auto"}}/>
                    </div>

                    <div className='mess-window-action-icon-container'>
                        <HiVideoCamera style={{margin:"auto"}}/>
                    </div>

                    <div className='mess-window-action-icon-container'>
                        <CgLoadbar style={{margin:"auto"}}/>
                    </div>

                    <div className='mess-window-action-icon-container'>
                        <FiX style={{margin:"auto"}}/>
                    </div>


                </div>

            </div>


            {/* Content */}
            <div className='mess-chat-content-container'>
                <div className='mess-chat-content-user-backgrounnd-info'>
                    <div className='mess-chat-content-user-backgrounnd-info-img-container' >
                        <img alt={data.userName} src={data.userSrcImg} className='mess-chat-content-user-backgrounnd-info__img' />
                        <div></div>
                    </div>
                    <div className='mess-chat-content-user-backgrounnd-info-span-container'>
                        <span className='mess-chat-content-user-backgrounnd-info-span-container-name'>{data.userName}</span>
                        <span>Facebook</span>
                        <span>Các  bạn là bạn bè trên Facebook</span>
                    </div>
                </div>
                <div className='mess-chat-content-other-container'>
                    <img src={data.userSrcImg} className='mess-chat-content__img'/>
                    <div className='mess-chat-content-message-container'>
                        <span>Hello</span>
                        <span>Hello</span>

                    </div>
                </div>

                <div className='mess-chat-content-current-container'>
                    <img src={data.userSrcImg} className='mess-chat-content__img'/>
                    <div className='mess-chat-content-message-container'>
                        <span>Hello</span>
                        <span>Hello</span>

                        

                    </div>
                </div>

            </div>


            {/* Footer */}

            <div className='mess-window-input-container'>

                <div className='mess-window-input-icon-container'>
                    <AiFillPlusCircle style={{margin:"auto"}}/>
                    
                </div>
                <div className='mess-window-input-textarea-icon-container'>
                    <div className='mess-window-input-icon-container-wraper'>
                        <div className='mess-window-input-icon-container'>
                            <FaImages style={{margin:"auto"}}/>

                        </div>
                        <div className='mess-window-input-icon-container'>
                        <LuSticker style={{margin:"auto"}}/>

                        </div>
                        <div className='mess-window-input-icon-container'>
                        <AiOutlineGif style={{margin:"auto"}}/>

                        </div>
                    </div>
                    <div className='mess-window-input-textarea-container'>
                        <textarea placeholder="Aa"></textarea>
                        
                        <div className='mess-window-input-icon-container center'>
                            <FaSmile style={{margin:"auto"}}/>    
                        </div>
                    </div>
                </div>
                <div className='mess-window-input-icon-container padding'>
                    <AiFillLike style={{margin:"auto"}}/>
                </div>

            </div>
        </div>
    )
}

export default ChatWindow