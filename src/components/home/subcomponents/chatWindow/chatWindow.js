import './chatWindow.css'
import { AiOutlineDown } from "react-icons/ai";
import { HiVideoCamera } from "react-icons/hi2";
import { CgLoadbar } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';

const ChatWindow = function()
{

    const  [data,setData] = useState()
    useEffect(()=>
    {
        // call api to get data
        setData(
            {
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
            }
        )
    },[])

    return(
        <div className='mess-window-container'>
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
            <div className='mess-window-seperate'></div>
        </div>
    )
}

export default ChatWindow