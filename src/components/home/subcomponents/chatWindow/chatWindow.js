import './chatWindow.css'
import { AiOutlineGif,AiOutlineDown,AiFillPlusCircle,AiFillLike } from "react-icons/ai";
import { HiVideoCamera } from "react-icons/hi2";
import { CgLoadbar } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { FaImages,FaSmile,FaPhoneAlt } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import { useEffect, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import twemoji from 'twemoji';
const ChatWindow = function(props)
{
 // State for input mess  window
    console.log(props)
    const [message,setMessage] = useState('')
    const [heightMessage,setHeightMess] = useState(0)
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
    // Emoji Picker state
    const [emojiPickerContainer,setEmojiPickerContainer] = useState(false)


    useEffect(()=>
    {

    })

    const [show,setShow] = useState(true)


    useEffect(()=>
    {
        // call api to get data
        setData({
            userId:1,
            userSrcImg:"assets/image/avt-user-login.jpg",
            userName:"Trung Nguyen",
            mess:{
                currentUser:[
                    
                    {
                        message:"Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. ",
                        
                    },
                    {
                        message:"Suspendisse in est ante in nibh mauris cursus mattis molestie.",
                        
                    }
                ],
                otherUser:[
                    {
                        message:"Suspendisse in molestie.",
                        
                    },
                    {
                        message:"Nunc lobortis  in massa.",
                        
                    },
                    {
                        message:"Hello",
                        
                    }
                ]
            }
        })
        twemoji.parse(document.getElementById('root'))

    },[])


    useEffect(()=>
    {
        const lineTest = /\n+/ig
        const heightMess = message.match(lineTest)?message.match(lineTest).length:0
        setHeightMess(heightMess)

    },[message])


    // function
    function handleSendMessage(event)
    {
        event.preventDefault()
        event.stopPropagation()
        console.log(message)
        if(message.length>0)
        {
            setData({
                ...data,
                mess:{
                    ...data.mess,
                    currentUser:[...data.mess.currentUser,{message:message}]
                }
            })
        }
        setMessage('')
    }

    

    function handleInputMessage(event)
    {
        event.preventDefault()
        event.stopPropagation()
        setMessage(event.target.value.toString())
    }
            

   

    return(
        <div className='mess-window-container' style={{display: show?"flex":"none"}}>
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

                    <div className='mess-window-action-icon-container' onClick={()=>setShow(false)}>
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
                        {
                            data.mess.otherUser?.map((messData,index)=>
                            {
                                return(
                                    <span key={index}>{messData.message}</span>
                                )
                            })
                        }


                    </div>
                </div>

                <div className='mess-chat-content-current-container'>
                    <div className='mess-chat-content-message-container'>
                       {
                        data.mess.currentUser?.map((messData,index)=>
                        {
                            return(
                                <span key={index}>{messData.message}</span>
                            )
                        })
                       }

                        

                    </div>
                </div>

            </div>


            {/* Footer */}

            <div className='mess-window-input-container' style={{height:heightMessage*36+60+"px"}}>

                <div className='mess-window-input-icon-container'>
                    <AiFillPlusCircle style={{margin:"auto"}}/>
                    
                </div>
                <div className='mess-window-input-textarea-icon-container' style={{height: heightMessage*36+36+"px"}}>
                    <div className='mess-window-input-icon-container-wraper' style={{display:message.length==0?"flex":"none"}}>
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
                        <textarea placeholder="Aa" value={message} onChange={handleInputMessage}></textarea>
                        
                        

                        <div className='mess-window-input-icon-container center' onClick={()=> setEmojiPickerContainer(!emojiPickerContainer)}>
                            <FaSmile style={{margin:"auto"}} />
                        </div>
                        {
                            emojiPickerContainer&&(
                                <div className='mess-window-emoji-picker-container'>
                                <EmojiPicker
                                width={"500px"}
                                height={"300px"}
                                emojiStyle={"facebook"}
                                onEmojiClick={(emoji)=> setMessage(preMessage=>preMessage+emoji.emoji)}
                                />    
                            </div>
                            )
                        }
                       
                    </div>
                </div>
                {
                    message.length>0?(
                        <div   div className='mess-window-input-icon-container padding' onClick={e=>handleSendMessage(e)}>
                            <BsSend style={{margin:"auto"}} />    
                        </div>
                    )
                    :(
                        <div className='mess-window-input-icon-container padding'>
                            <AiFillLike style={{margin:"auto"}}/>
                        </div>
                    )
                }
                
               

            </div>
                        
        </div>
    )
}

export default ChatWindow