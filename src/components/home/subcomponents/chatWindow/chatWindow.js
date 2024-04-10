import { AiOutlineGif, AiOutlineDown, AiFillPlusCircle, AiFillLike } from 'react-icons/ai';
import { HiVideoCamera } from 'react-icons/hi2';
import { CgLoadbar } from 'react-icons/cg';
import { FiX } from 'react-icons/fi';
import { FaImages, FaSmile, FaPhoneAlt } from 'react-icons/fa';
import { LuSticker } from 'react-icons/lu';
import { BsSend } from 'react-icons/bs';
import { useEffect, useContext, useState, useLayoutEffect, Fragment } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { memo } from 'react';

import './chatWindow.css';
import MessStateContext from '../../store/messContext';
import { messAction } from '../../store';
import instance from '../../../../axios';

const ChatWindow = function ({ currentUserName, targetUserName, messageData, socket }) {
    function formatDateFromTimestamp() {
        const date = new Date(Date.now());
        return date.toLocaleString();
    }

    // State for input mess  window
    const [message, setMessage] = useState([]);
    const [heightMessage, setHeightMess] = useState(0);
    const [targetUserData, setTargetUserData] = useState({
        userName: '',
        avtFilePath: '',
        firstName: '',
        lastName: '',
    });
    const [messData, setMessData] = useState([]);
    useEffect(() => {
        console.log(messData);
    }, [messData]);
    // Emoji Picker state
    const [emojiPickerContainer, setEmojiPickerContainer] = useState(false);

    // reducer
    const [messState, dispatchMessState] = useContext(MessStateContext);

    useLayoutEffect(() => {
        instance
            .post(`/mess/${targetUserName}`, { currentUserName: currentUserName })
            .then((res) => {
                setTargetUserData(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        if (messageData) setMessData((preState) => [...preState, messageData]);
    }, [messageData]);

    // useEffect(() => {
    //     instance
    //         .post(`/message/current/${currentUserName}/target/${targetUserName}`)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    useEffect(() => {
        console.log(messData);
    }, [messData]);
    
    useEffect(() => {
        const lineTest = /\n+/gi;
        const heightMess = lineTest.test(message) ? message.match(lineTest).length : 0;
        let wordBreakMess = (message.length - (message.length % 25)) / 25;
        setHeightMess(heightMess + wordBreakMess);
    }, [message]);

    // function
    const handleSendMessage = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('hello')
        socket.emit('send-message', {  targetUser: targetUserName, message: message,sender: currentUserName });
        setMessage('');
    };

    const handleInputMessage = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const textarea = event.target;
        const inputValue = textarea.value.toString();
        setMessage(inputValue);
    };

    const handelHideMessWindow = (e) => {
        dispatchMessState(messAction.hideMessWinDow(e.target.closest('.mess-window-container').id));
        dispatchMessState(messAction.showMessBubble(e.target.closest('.mess-window-container').id));
    };

    const handleDeleteMessWindow = (e) => {
        dispatchMessState(messAction.hideMessWinDow(e.target.closest('.mess-window-container').id));
    };

    const handleTexareaClick = (e) => {
        e.stopPropagation();
    };

    return (
        <form className="mess-window-container" id={targetUserName} onSubmit={(e) => e.preventDefault()}>
            {/* Header */}
            <div className="mess-window-header-container">
                <div className="mess-window-header-user-detail-container">
                    <div className="mess-window-header-avt-container">
                        <img src={targetUserData.avtFilePath} className="mess-window-avt-user" />
                        <div className="mess-window-active-user__div"></div>
                    </div>

                    <div className="mess-window-header-status-container">
                        <div className="mess-window-header-span-container">
                            <span>{targetUserData.firstName + ' ' + targetUserData.lastName}</span>
                            <span className="status">Đang hoạt động</span>
                        </div>
                        <AiOutlineDown style={{ fontSize: '10px' }} />
                    </div>
                </div>

                <div className="mess-window-action-container">
                    <div className="mess-window-action-icon-container">
                        <FaPhoneAlt style={{ margin: 'auto' }} />
                    </div>

                    <div className="mess-window-action-icon-container">
                        <HiVideoCamera style={{ margin: 'auto' }} />
                    </div>

                    <div className="mess-window-action-icon-container" onClick={(e) => handelHideMessWindow(e)}>
                        <CgLoadbar style={{ margin: 'auto' }} />
                    </div>

                    <div className="mess-window-action-icon-container" onClick={(e) => handleDeleteMessWindow(e)}>
                        <FiX style={{ margin: 'auto' }} />
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="mess-chat-content-container">
                <div className="mess-chat-content-user-backgrounnd-info">
                    <div className="mess-chat-content-user-backgrounnd-info-img-container">
                        <img
                            alt={targetUserData.userName}
                            src={targetUserData.avtFilePath}
                            className="mess-chat-content-user-backgrounnd-info__img"
                        />
                        <div></div>
                    </div>
                    <div className="mess-chat-content-user-backgrounnd-info-span-container">
                        <span className="mess-chat-content-user-backgrounnd-info-span-container-name">
                            {targetUserData.firstName + ' ' + targetUserData.lastName}
                        </span>
                        <span>Facebook</span>
                        <span>Các bạn là bạn bè trên Facebook</span>
                    </div>
                </div>
                {messData?.map((data, index) => {
                    return (
                        <Fragment key={index}>
                            {data.sender === targetUserName ? (
                                <div className="mess-chat-content-other-container">
                                    <img src={targetUserData.avtFilePath} className="mess-chat-content__img" />
                                    {/* <ul className="mess-chat-content-message-container">
                                        {data.message?.map((item, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul> */}
                                </div>
                            ) : (
                                <div className="mess-chat-content-current-container">
                                    <ul className="mess-chat-content-message-container">
                                        {data.message?.map((item, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            )}
                        </Fragment>
                    );
                })}
            </div>
            {/* Footer */}
            <div className="mess-window-input-container" style={{ height: heightMessage * 36 + 60 + 'px' }}>
                <div className="mess-window-input-icon-container">
                    <AiFillPlusCircle style={{ margin: 'auto' }} />
                </div>
                <div
                    className="mess-window-input-textarea-icon-container"
                    style={{ height: heightMessage * 36 + 36 + 'px' }}
                >
                    <div
                        className="mess-window-input-icon-container-wraper"
                        style={{ display: message.length == 0 ? 'flex' : 'none' }}
                    >
                        <div className="mess-window-input-icon-container">
                            <FaImages style={{ margin: 'auto' }} />
                        </div>
                        <div className="mess-window-input-icon-container">
                            <LuSticker style={{ margin: 'auto' }} />
                        </div>
                        <div className="mess-window-input-icon-container">
                            <AiOutlineGif style={{ margin: 'auto' }} />
                        </div>
                    </div>
                    <div
                        className="mess-window-input-textarea-container"
                        style={{ height: heightMessage * 36 + 36 + 'px' }}
                    >
                        <textarea
                            placeholder="Aa"
                            value={message}
                            onChange={handleInputMessage}
                            onClick={(e) => handleTexareaClick(e)}
                        ></textarea>

                        <div
                            className="mess-window-input-icon-container center"
                            onClick={() => setEmojiPickerContainer(!emojiPickerContainer)}
                        >
                            <FaSmile style={{ margin: 'auto' }} />
                        </div>
                    </div>
                </div>
                {message.length > 0 ? (
                    <div className="mess-window-input-icon-container padding" onClick={(e) => handleSendMessage(e)}>
                        <BsSend style={{ margin: 'auto' }} />
                    </div>
                ) : (
                    <div className="mess-window-input-icon-container padding">
                        <AiFillLike style={{ margin: 'auto' }} />
                    </div>
                )}
            </div>
            {emojiPickerContainer && (
                <div className="mess-window-emoji-picker-container">
                    <EmojiPicker
                        width={'500px'}
                        height={'300px'}
                        emojiStyle={'facebook'}
                        onEmojiClick={(emoji) => setMessage((preMessage) => preMessage + emoji.emoji)}
                    />
                </div>
            )}
        </form>
    );
};

export default memo(ChatWindow);
