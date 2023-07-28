// React Icon
import {
    BsBookmark,
    BsClock,
    BsBell,
    BsSearch,
    BsMessenger,
    BsCameraVideoFill,
    BsPencilSquare,
    BsFillPeopleFill,
    BsLink45Deg,
} from 'react-icons/bs';
import { IoNotifications, IoApps } from 'react-icons/io5';
import {
    AiOutlineGif,
    AiOutlineCamera,
    AiOutlineComment,
    AiOutlineGlobal,
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlinePlus,
    AiOutlineUserSwitch,
    AiOutlineDown,
    AiFillHome,
    AiFillFlag,
    AiOutlineNotification,
} from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { IoIosMore, IoIosBook } from 'react-icons/io';
import { BiMessageError, BiShare, BiExpand, BiMoviePlay } from 'react-icons/bi';
import { FaWindowClose, FaRegWindowClose, FaRegCommentAlt, FaTv, FaUserFriends, FaCross } from 'react-icons/fa';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { LuSticker } from 'react-icons/lu';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
// Hook
import React, { useEffect, useState, useContext, useRef } from 'react';

// Component
import ChatWindow from './subcomponents/chatWindow/chatWindow';
import EmojiLikeButton from './subcomponents/emojiLikeButton/emoji';

// Provider
import MessStateContext from './store/messContext';
import AuthenContext from '../../store/authenContext';

// Reducer action
import { messAction } from './store';

// CSS
import './home.css';

// axios
import instance from '../../axios';
import SuggestFriend from './subcomponents/suggestFriend/suggestFriend';

function Home() {
    // Img src
    const userSrcImg = 'assets/image/avt-user-login.jpg';
    const userStatusImg = 'assets/image/user-status-image.jpg';
    const angryEmoji = 'assets/image/emoji/angry.svg';
    const likeEmoji = 'assets/image/emoji/like.svg';
    const loveEmoji = 'assets/image/emoji/love.svg';
    const shareLoveEmoji = 'assets/image/emoji/share-love.svg';
    const sadEmoji = 'assets/image/emoji/sad.svg';
    const hahaEmoji = 'assets/image/emoji/haha.svg';
    const wowEmoji = 'assets/image/emoji/wow.svg';

    // Hook
    const [homeContactUserData, setHomeContacUserData] = useState([]);
    const [homeData, setHomeData] = useState({
        messType: 'personal',
        currentUser: {
            userId: '3dfg',
            username: 'Trung Nguyen',
        },
        displayReelScrollLeftButton: false,
        newFeeds: [
            {
                id: 0,
                userPoster: {
                    avtUrl: 'assets/image/avt-user-login.jpg',
                    name: 'Trung Nguyen',
                },
                timePosted: '4 Tháng 2, 2022',
                newFeedStatus: 'Hello',
                newFeedSrcImg: 'assets/image/user-status-image.jpg',
                reacted: 'none',
                userReacted: [
                    {
                        userId: 0,
                        userName: 'Thiên Long',
                        reacted: 'haha',
                    },
                    {
                        userId: 1,
                        userName: 'Phúc Lee',
                        reacted: 'haha',
                    },
                    {
                        userId: 3,
                        userName: 'Phúc Lee',
                        reacted: 'haha',
                    },
                    {
                        userId: 4,
                        userName: 'Phúc Lee',
                        reacted: 'haha',
                    },
                    {
                        userId: 5,
                        userName: 'Phúc Lee',
                        reacted: 'haha',
                    },
                ],
                comment: [
                    {
                        userId: 1,
                        userSrcImg: 'assets/image/user-status-image.jpg',
                        userName: 'Trung Nguyen',
                        comment: {
                            commentText: 'siuuuuuuuuuuuuuuuuuu',
                            comentImgSrc: 'assets/image/user-status-image.jpg',
                        },
                        timePosted: '1 năm',
                    },
                ],
            },
        ],
    });
    // Use Context
    const [authenState, dispatchAuthenState] = useContext(AuthenContext);
    const [messState, dispatchMessState] = useContext(MessStateContext);

    const inputHomeSearch = useRef();

    // Use State
    const [valueInputHomeSearch, setValueInputHomeSearch] = useState('');
    const [currentUserData, setCurrentUserData] = useState({
        avtFilePath: '',
        dob: '',
        firstName: '',
        gender: '',
        lastName: '',
        userName: '',
    });
    // Use Effect
    useEffect(() => {
        setCurrentUserData({
            avtFilePath: authenState.payload.avtFilePath,
            dob: authenState.payload.dob,
            firstName: authenState.payload.firstName,
            gender: authenState.payload.gender,
            lastName: authenState.payload.lastName,
            userName: authenState.payload.userName,
        });
    }, []);

    const showMessWindow = (e) => {
        // instance
        //     .get()
        //     .then((res) => {
        //         console.log(res.data.data);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
        dispatchMessState(messAction.showMessWindow(e.target.closest('.contact-user').id));
    };

    useEffect(() => {}, [valueInputHomeSearch]);

    const handleNewFeedMoreOptionOpen = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target);
        if (event.target.tagName === 'div') event.target.children[1].classList.add('active');
        else if (event.target.tagName == 'svg') event.target.parentNode.children[1].classList.add('active');
        else if (event.target.tagName == 'path') event.target.parentNode.parentNode.children[1].classList.add('active');
    };
    const handleNewFeedMoreOptionHide = (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            event.target.children[1].classList.remove('active');
        });
    };
    const activeNotifiDropTab = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const notifiIcon = document.querySelector('.nav-icon--padding.notification');
        const notifiDropTab = document.querySelector('.notifi-droptab-container');
        if (notifiDropTab.classList[1] == 'active') {
            notifiDropTab.classList.remove('active');
            notifiIcon.classList.remove('active');
        } else {
            notifiDropTab.classList.add('active');
            notifiIcon.classList.add('active');
        }
    };
    const handleHideNotifiDropTab = (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.addEventListener('click', (event) => {
            event.preventDefault();
            const notifiIcon = document.querySelector('.nav-icon--padding.notification');

            const notifiDropTab = document.querySelector('.notifi-droptab-container');
            notifiDropTab.classList.remove('active');
            notifiIcon.classList.remove('active');
        });
    };
    const handleHideMessDropTab = (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.addEventListener('click', (event) => {
            event.preventDefault();
            const messIcon = document.querySelector('.nav-icon--padding.mess');

            const messDropTab = document.querySelector('.mess-droptab-container');
            messDropTab.classList.remove('active');
            messIcon.classList.remove('active');
        });
    };

    const handleDeleteMessBubble = (e) => {
        e.stopPropagation();
        dispatchMessState(messAction.hideMessBubble(e.target.closest('.mess-bubble-item').id));
    };

    const handleClickInput = (event) => {
        event.stopPropagation();
        const droptab = document.querySelector('.nav-search-tab-container');
        droptab.classList.add('active');
        inputHomeSearch.current.focus();
    };
    const handleChangeHomeSearchInput = (event) => {
        setValueInputHomeSearch(event.target.value);
    };
    const hideInputTab = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const droptab = document.querySelector('.nav-search-tab-container');
        document.addEventListener('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
            droptab.classList.remove('active');
        });
    };

    const handleReelsScrollRight = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const slideContainer = document.querySelector('.home-reels');
        slideContainer.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
        setHomeData((prevState) => ({
            ...prevState,
            displayReelScrollLeftButton: true,
        }));
    };
    const handleReelsScrollLeft = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const slideContainer = document.querySelector('.home-reels');
        slideContainer.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
        const scrollPosition = slideContainer.scrollLeft;
        console.log(scrollPosition);
        if (scrollPosition <= 200)
            setHomeData((prevState) => ({
                ...prevState,
                displayReelScrollLeftButton: false,
            }));
        else
            setHomeData((prevState) => ({
                ...prevState,
                displayReelScrollLeftButton: true,
            }));
    };

    const activeMessDropTab = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const messIcon = document.querySelector('.nav-icon--padding.mess');
        const messDropTab = document.querySelector('.mess-droptab-container');
        if (messDropTab.classList[1] == 'active') {
            messDropTab.classList.remove('active');
            messIcon.classList.remove('active');
        } else {
            messDropTab.classList.add('active');
            messIcon.classList.add('active');
        }
    };
    const handleNewFeedEmojiClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const emojiContainer = event.target.parentNode;
        const newFeedLikeButton = emojiContainer.parentNode;
        const newFeedContainer = newFeedLikeButton.parentNode.parentNode;
        newFeedContainer.classList.add('reacted');
        let newFeeds = homeData.newFeeds;
        let targetIndex = 0;
        for (targetIndex; targetIndex < newFeeds.length; targetIndex++) {
            if (newFeeds[targetIndex].id == newFeedContainer.id) {
                if (newFeeds[targetIndex].reacted == 'none')
                    newFeeds[targetIndex].userReacted.push(homeData.currentUser);
                newFeeds[targetIndex].reacted = event.target.alt;
            }
        }

        setHomeData((prevState) => ({
            ...prevState,
            newFeeds: newFeeds,
        }));
    };
    const handleNewFeedEmojiUnClick = (event, currentNewFeed) => {
        event.preventDefault();
        event.stopPropagation();
        if (currentNewFeed.reacted === 'none') {
            currentNewFeed.reacted = 'like';
            currentNewFeed.userReacted.push(homeData.currentUser);
        } else {
            currentNewFeed.reacted = 'none';
            let indexCurrentUser = currentNewFeed.userReacted.indexOf(homeData.currentUser);
            currentNewFeed.userReacted.splice(indexCurrentUser, 1);
        }
        let newFeeds = homeData.newFeeds;
        for (let newFeed of newFeeds) if (newFeed.id === currentNewFeed.id) newFeed = currentNewFeed;
        setHomeData((prevState) => ({
            ...prevState,
            newFeeds: newFeeds,
        }));
    };
    const handelHideMessBubble = (e) => {
        e.stopPropagation();
        dispatchMessState(messAction.hideMessBubble(e.target.closest('.mess-bubble-item'.id)));
        dispatchMessState(messAction.showMessWindow(e.target.closest('.mess-bubble-item').id));
    };
    return (
        <div className="home-container">
            <nav className="nav">
                <a className="nav-logo__a" href="/home">
                    facebook
                </a>
                <div className="nav-search-container" onClick={(e) => handleClickInput(e)} onMouseLeave={hideInputTab}>
                    <BsSearch />
                    <input
                        type="search"
                        onClick={handleClickInput}
                        className="home-search__input"
                        placeholder="Tìm kiếm trên Facebook"
                        ref={inputHomeSearch}
                        onChange={(e) => setValueInputHomeSearch(e.target.value)}
                        value={valueInputHomeSearch}
                    />

                    {/* Search  tab */}
                    <div className="nav-search-tab-container">
                        <div className="search-title-container">
                            <span className="search-title__span">Gần đây</span>
                            <a href="#" className="search-title__a">
                                Chỉnh sửa
                            </a>
                        </div>
                        <div className="search-target-container" onClick={() => console.log('Hello')}>
                            <img src={userSrcImg} className="home-avt__img smaller" />
                            <div className="search-target-detail">
                                <span>Nguyễn Trần Minh Trung</span>
                                <span className="search-target-role">Bạn bè</span>
                            </div>
                            <FiX style={{ fontSize: '15px', color: 'rgb(176, 179, 184)' }} />
                        </div>
                    </div>
                </div>
                <div className="home-icon-container">
                    <div className="nav-img-icon-container">
                        <img className="home-avt__img" src={currentUserData.avtFilePath} alt="avatar user" />
                        <AiOutlineDown
                            style={{
                                position: 'absolute',
                                height: '12px',
                                width: '12px',
                                borderRadius: '6px',
                                backgroundColor: '#3A3B3C',
                                bottom: 0,
                                right: 0,
                                padding: 'auto',
                            }}
                        />
                    </div>

                    <div
                        className="nav-icon--padding notification"
                        onClick={activeNotifiDropTab}
                        onMouseLeave={handleHideNotifiDropTab}
                    >
                        <IoNotifications style={{ margin: 'auto' }} />
                        <div className="notifi-droptab-container">
                            <div className="home-notifi-header-container">
                                <h1>Thông báo</h1>
                                <div className="notifi-icon-mode-container">
                                    <div className="notifi-icon-mode">
                                        <IoIosMore style={{ margin: 'auto' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="notifi-type-container">
                                <button className="notifi-type active">Tất cả</button>
                                <button className="notifi-type">Chưa đọc</button>
                            </div>
                            <div className="notifi-container">
                                <div className="notifi-zone-container">
                                    <div className="zone-header-container">
                                        <span>Lời mời kết bạn</span>
                                        <a className="drop-tab-see-all" href="#">
                                            Xem tất cả
                                        </a>
                                    </div>

                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã gửi cho bạn
                                                lời mời kết bạn
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                            <div className="zone-button-container">
                                                <button className="active">Xác nhận</button>
                                                <button>Xóa</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div></div>
                                </div>
                                <div className="notifi-zone-container">
                                    <div className="zone-header-container">
                                        <span>Trước đó</span>
                                        <a className="drop-tab-see-all" href="#">
                                            Xem tất cả
                                        </a>
                                    </div>

                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <div className="zone-item-container">
                                        <img className="notifi-avt-user" src={userSrcImg} alt="avt-user" />
                                        <div className="notifi-item-detail">
                                            <span className="notifi-item-content">
                                                <strong className="notifi-name-taget">Minh Trung</strong> đã nhắc đến
                                                bạn ở một bình luận trong{' '}
                                                <strong className="notifi-name-target">Tôi yêu coding</strong>
                                            </span>
                                            <span className="notifi-item-time">18 phút</span>
                                        </div>
                                    </div>

                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="nav-icon--padding mess"
                        onClick={activeMessDropTab}
                        onMouseLeave={handleHideMessDropTab}
                    >
                        <BsMessenger style={{ margin: 'auto' }} />
                        <div className="mess-droptab-container">
                            <div className="home-mess-header-container">
                                <h1>Chat</h1>
                                <div className="mess-icon-mode-container">
                                    <div className="mess-icon-mode">
                                        <IoIosMore style={{ margin: 'auto' }} />
                                    </div>
                                    <div className="mess-icon-mode">
                                        <BiExpand style={{ margin: 'auto' }} />
                                    </div>
                                    <div className="mess-icon-mode">
                                        <BsCameraVideoFill style={{ margin: 'auto' }} />
                                    </div>
                                    <div className="mess-icon-mode">
                                        <BsPencilSquare style={{ margin: 'auto' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="mess-search-container">
                                <BsSearch />
                                <input
                                    type="search"
                                    className="mess-search__input"
                                    placeholder="Tìm kiếm trên Messenger"
                                />
                            </div>
                            <div className="mess-type-container">
                                <button className="mess-type active">Hộp thư</button>
                                <button className="mess-type">Cộng đồng</button>
                            </div>
                            <div className="mess-container">
                                <div className="mess-item-container">
                                    <img className="mess-avt-user" src={userSrcImg} alt="avt-user" />
                                    <div className="mess-item-detail">
                                        <span className="mess-item-name">LT - Sao chổi Tournament</span>
                                        <div className="mess-item-message-and-time-container">
                                            <span className="mess-item-message">
                                                Bạn: Chay traaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaon sao
                                                choi .
                                            </span>
                                            <span className="mess-item-time">18 phút</span>
                                        </div>
                                    </div>
                                    <img className="mess-avt-user smaller" src={userSrcImg} alt="avt-user" />
                                    <div className="mess-item-more">
                                        <IoIosMore style={{ margin: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="mess-footer">
                                <a href="#">Xem tất cả trong Messenger</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="home-content-container">
                {/* left side bar */}

                <div className="home-left-side-bar-container">
                    <div className="left-side-header">
                        <div className="home-left-side-bar-item-container">
                            <div className="left-side-bar-active-bar"></div>
                            <AiFillHome className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Trang chủ</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <img src={userSrcImg} className="home-avt__img bar" />
                            <span className="side-bar-item__span">
                                {currentUserData.lastName + ' ' + currentUserData.firstName}
                            </span>
                        </div>
                    </div>
                    <div className="left-side-bar-feature-container">
                        <div className="home-left-side-bar-item-container">
                            <FaTv className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Watch</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <FaUserFriends className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Bạn bè</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <AiFillFlag className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Trang</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <TbBuildingWarehouse className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Marketplace</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <IoApps className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Xem Tất cả</span>
                        </div>
                    </div>
                    <div className="left-side-bar-feature-container">
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>

                        <div className="home-left-side-bar-item-container">
                            <BsFillPeopleFill className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Xem tất cả các nhóm</span>
                        </div>
                    </div>
                    <div className="left-side-bar-feature-container last">
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>

                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>

                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <span className="side-bar-item-new"></span>
                            <img src={userSrcImg} className="home-avt__img bar-page" />
                            <span className="side-bar-item__span">IU Start up Demo days</span>
                        </div>
                        <div className="home-left-side-bar-item-container">
                            <BsLink45Deg className="left-side-bar-icon" />
                            <span className="side-bar-item__span">Xem tất cả lối tắt</span>
                        </div>
                    </div>
                </div>

                <div></div>
                <div className="new-feed-right-side-bar-container">
                    {/* new feed */}

                    <div className="home-new-feed-container">
                        {/* Reels */}
                        <div className="home-reels-container">
                            <button className="reel-arrow-right" onClick={handleReelsScrollRight}>
                                <AiOutlineRight style={{ margin: 'auto', fontWeight: 600 }} />
                            </button>

                            <button
                                className="reel-arrow-left"
                                style={{ display: homeData.displayReelScrollLeftButton ? 'flex' : 'none' }}
                                onClick={handleReelsScrollLeft}
                            >
                                <AiOutlineLeft style={{ margin: 'auto', fontWeight: 600 }} />
                            </button>
                            <div className="reels-nav-container">
                                <div className="reels-nav">
                                    <div className="reel-nav-center active">
                                        <IoIosBook style={{ fontSize: '24px', marginRight: '8px' }} /> <span>Tin</span>
                                    </div>
                                    <div className="reel-nav-active"></div>
                                </div>
                                <div className="reels-nav">
                                    <div className="reel-nav-center">
                                        <BiMoviePlay style={{ fontSize: '24px', marginRight: '8px' }} />{' '}
                                        <span>Reels</span>
                                    </div>
                                </div>
                                <div className="reels-nav">
                                    <div className="reel-nav-center">
                                        <BsCameraVideoFill style={{ fontSize: '24px', marginRight: '8px' }} />{' '}
                                        <span>Phòng họp mặt</span>
                                    </div>
                                </div>
                            </div>
                            <div className="home-reels">
                                <div className="reel-block-bar"></div>
                                <div className="reel">
                                    <div className="avt-user-icon-container current">
                                        <img className="reel-avt-user current" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <div className="reel-plus-container">
                                        <AiOutlinePlus className="reel-plus__icon" />
                                    </div>
                                    <div className="reel-title-container">Tạo tin</div>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                                <div className="reel">
                                    <div className="avt-user-icon-container other">
                                        <div className="reel-avt-user other">
                                            <img className="avt-user other" src={userSrcImg} />
                                        </div>
                                        <img className="reel-background" alt="avt user" src={userSrcImg} />
                                    </div>
                                    <span className="reel-name-user">Trung Nguyen</span>
                                </div>
                            </div>
                        </div>
                        {/* Status */}
                        <div className="home-status-container">
                            <div className="status-header">
                                <img type="text" className="home-avt__img" src={userSrcImg} alt="avatar user" />
                                <input
                                    className="status__input"
                                    placeholder={currentUserData.firstName + ' ơi bạn đang nghĩ gì thế'}
                                />
                            </div>
                            <div className="line-through status"></div>
                            <div className="status-action-container">
                                <div className="status-action">
                                    <div className="status-action--center">
                                        <img
                                            alt="status icon"
                                            className="status-icon__img"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
                                        />
                                        <span>Video trực tiếp</span>
                                    </div>
                                </div>
                                <div className="status-action">
                                    <div className="status-action--center">
                                        <img
                                            alt="status icon"
                                            className="status-icon__img"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                                        />
                                        <span>Ảnh/video</span>
                                    </div>
                                </div>
                                <div className="status-action">
                                    <div className="status-action--center">
                                        <img
                                            alt="status icon"
                                            className="status-icon__img"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
                                        />
                                        <span>Cảm xúc/hoạt động</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* New feed */}
                        {homeData.newFeeds.map((item, index) => (
                            <div className="new-feed-container" id={item.id} key={index}>
                                <div className="new-feed-header">
                                    <div className="new-feed-header-avt-detail">
                                        <img src={item.userPoster.avtUrl} className="home-avt__img" />
                                        <div className="new-feed-header-detail">
                                            <span className="new-feed-header-detail-name-user">Trung Nguyen</span>
                                            <span className="new-feed-header-detail-date">
                                                4 Tháng 2, 2022 <span className="dot-seperate">.</span>
                                                <AiOutlineGlobal style={{ margin: 'auto' }} />
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="new-feed-more-icon-container"
                                        onClick={handleNewFeedMoreOptionOpen}
                                        onMouseLeave={handleNewFeedMoreOptionHide}
                                    >
                                        <IoIosMore
                                            style={{ fontSize: '20px', margin: 'auto' }}
                                            onMouseLeave={(e) => e.stopPropagation()}
                                        />

                                        <div className="new-feed-more-option-drop-tab-container">
                                            <svg fill="#242526" className="new-feed-more-option-drop-tab__svg">
                                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                                            </svg>
                                            <div className="nf-more-option-content">
                                                <div className="nf-option-action">
                                                    <BsBookmark style={{ fontSize: '20px' }} />
                                                    <div className="nf-option-span-container">
                                                        <span>Lưu bài viết</span>
                                                        <span className="nf-option__span--small">
                                                            Thêm vào danh sách mục đã lưu
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="nf-option-action">
                                                    <BsBell style={{ fontSize: '20px' }} />
                                                    <div className="nf-option-span-container">
                                                        <span>Bật thông báo về bài viết này</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="nf-option-action">
                                                        <FaRegWindowClose style={{ fontSize: '20px' }} />
                                                        <div className="nf-option-span-container">
                                                            <span>Ẩn bài viết</span>
                                                            <span className="nf-option__span--small">
                                                                Ẩn bớt các bài viết tương tự
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="nf-option-action">
                                                        <BsClock style={{ fontSize: '20px' }} />
                                                        <div className="nf-option-span-container">
                                                            <span>Tạm ẩn {item.userPoster.name} trong 30 ngày</span>
                                                            <span className="nf-option__span--small">
                                                                Tạm thời sẽ không nhìn thấy bài viết nữa
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="nf-option-action">
                                                        <FaWindowClose style={{ fontSize: '20px' }} />
                                                        <div className="nf-option-span-container">
                                                            <span>Bỏ theo dõi {item.userPoster.name}</span>
                                                            <span className="nf-option__span--small">
                                                                Không nhìn thấy bài viết nữa nhưng vẫn là bạn bè
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="nf-option-action">
                                                        <BiMessageError style={{ fontSize: '20px' }} />
                                                        <div className="nf-option-span-container">
                                                            <span>Báo cáo ảnh</span>
                                                            <span className="nf-option__span--small">
                                                                Chúng tôi sẽ không cho {item.userPoster.name} biết là ai
                                                                đã báo cáo
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="new-feed-content-container">
                                    <span className="new-feed-status">Hello</span>
                                    <img
                                        className="new-feed-user-status__img"
                                        src={item.newFeedSrcImg}
                                        alt="status image"
                                    />
                                </div>
                                <div className="new-feed-react-comment-count-container">
                                    <div className="new-feed-react-container">
                                        <div className="new-feed-react">
                                            <img className="new-feed-reacted__img" src={hahaEmoji} alt="Haha" />
                                            <img className="new-feed-reacted__img" src={likeEmoji} alt="Thích" />
                                            <img className="new-feed-reacted__img" src={loveEmoji} alt="Yêu thích" />
                                        </div>
                                        <div className="new-feed-user-react-container">
                                            <span className="new-feed-user-reacted__span">
                                                {item.userReacted.length >= 3
                                                    ? item.userReacted[0].userName +
                                                      ', ' +
                                                      item.userReacted[1].userName +
                                                      ' và ' +
                                                      (item.userReacted.length - 2) +
                                                      ' người khác '
                                                    : item.userReacted[0].userName}{' '}
                                                đã bày tỏ cảm xúc
                                            </span>
                                        </div>
                                    </div>
                                    <span>26 bình luận</span>
                                </div>
                                {/* new feed Action */}
                                <div className="line-through status new-feed"></div>

                                <div className="new-feed-action-container">
                                    <div
                                        className="new-feed-action react"
                                        onClick={(e) => handleNewFeedEmojiUnClick(e, item)}
                                    >
                                        {item.reacted === 'like'
                                            ? EmojiLikeButton.like
                                            : item.reacted === 'love'
                                            ? EmojiLikeButton.love
                                            : item.reacted === 'angry'
                                            ? EmojiLikeButton.angry
                                            : item.reacted === 'wow'
                                            ? EmojiLikeButton.wow
                                            : item.reacted === 'share-love'
                                            ? EmojiLikeButton.shareLove
                                            : item.reacted === 'sad'
                                            ? EmojiLikeButton.sad
                                            : item.reacted === 'haha'
                                            ? EmojiLikeButton.haha
                                            : EmojiLikeButton.default}

                                        {/* {
                                    EmojiLikeButton.wow
                                } */}
                                        <div className="new-feed-react-emoji-container">
                                            <img
                                                className="emoji"
                                                alt="like"
                                                src={likeEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                            <img
                                                className="emoji"
                                                alt="love"
                                                src={loveEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                            <img
                                                className="emoji"
                                                alt="share-love"
                                                src={shareLoveEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                            <img
                                                className="emoji"
                                                alt="haha"
                                                src={hahaEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                            <img
                                                className="emoji"
                                                alt="wow"
                                                src={wowEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                            <img
                                                className="emoji"
                                                alt="sad"
                                                src={sadEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                            <img
                                                className="emoji"
                                                alt="angry"
                                                src={angryEmoji}
                                                onClick={handleNewFeedEmojiClick}
                                            />
                                        </div>
                                    </div>

                                    <div className="new-feed-action">
                                        <div className="new-feed-action--center">
                                            <AiOutlineComment style={{ fontSize: '18px', padding: '6px 4px' }} />
                                            <span>Bình luận</span>
                                        </div>
                                    </div>

                                    <div className="new-feed-action">
                                        <div className="new-feed-action--center">
                                            <BiShare style={{ fontSize: '18px', padding: '6px 4px' }} />
                                            <span>Chia sẻ</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="line-through status new-feed"></div>

                                {/* Comment */}

                                <div className="new-feed-comment-container">
                                    <div className="new-feed-more-comment-container">
                                        <span>Xem thêm bình luận</span>
                                    </div>
                                    {item.comment.map((commentItem, commentIndex) => {
                                        return (
                                            <div className="new-feed-users-comment-container" key={commentIndex}>
                                                <div className="new-feed-user-comment">
                                                    <div className="comment-avt-user-container">
                                                        <img
                                                            src={commentItem.userSrcImg}
                                                            className="home-avt__img comment"
                                                            alt="avatar user"
                                                        />
                                                    </div>
                                                    <div className="comment-detail-container">
                                                        <span className="comment-name-user">
                                                            {commentItem.userName}
                                                        </span>
                                                        <div className="commment-content-container">
                                                            <span className="comment-content">
                                                                {commentItem.comment.commentText}
                                                            </span>
                                                            {commentItem.comment.comentImgSrc !== '' ? (
                                                                ''
                                                            ) : (
                                                                <img
                                                                    className="comment__img"
                                                                    alt="comment image"
                                                                    src={userStatusImg}
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="comment-action-time-container">
                                                            <span>Thích</span>
                                                            <span>Phản hồi</span>
                                                            <span style={{ fontWeight: 400 }}>
                                                                {commentItem.timePosted}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <div className="new-feed-comment-input-container">
                                        <img src={userSrcImg} className="home-avt__img comment" />
                                        <div className="comment-input-wrap">
                                            <textarea placeholder="Viết bình luận"></textarea>
                                            <div className="comment-type__icon">
                                                <div className="comment-type__icon--padding">
                                                    <RiEmotionHappyLine style={{ margin: 'auto' }} />
                                                </div>

                                                <div className="comment-type__icon--padding">
                                                    <AiOutlineCamera style={{ margin: 'auto' }} />
                                                </div>
                                                <div className="comment-type__icon--padding">
                                                    <AiOutlineGif style={{ margin: 'auto' }} />
                                                </div>
                                                <div className="comment-type__icon--padding">
                                                    <LuSticker style={{ margin: 'auto' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Friend suggest */}
                        <SuggestFriend />
                    </div>

                    {/* rigt side bar */}
                    <div className="home-right-side-bar-container">
                        <div className="right-side-bar-header-container">
                            <div className="right-side-bar-header">
                                <span>Trang và trang cá nhân của bạn</span>
                                <div className="right-side-bar-icon-container">
                                    <IoIosMore className="right-sidebar-icon" />
                                </div>
                            </div>
                            <div className="right-side-bar-user-page-container">
                                <img alt="user page image" src={userSrcImg} className="user-page__img" />
                                <span className="user-page-name">Another well well well Universe</span>
                            </div>
                            <div className="right-side-bar-user-page-control">
                                <div className="right-side-control-item-container">
                                    <IoNotifications style={{ fontSize: '20px', padding: '6px' }} />
                                    <span>1 Thông báo</span>
                                </div>
                                <div className="right-side-control-item-container">
                                    <AiOutlineUserSwitch style={{ fontSize: '20px', padding: '6px' }} />
                                    <span>Chuyển sang trang</span>
                                </div>
                                <div className="right-side-control-item-container">
                                    <AiOutlineNotification style={{ fontSize: '20px', padding: '6px' }} />
                                    <span>Tạo quảng cáo</span>
                                </div>
                            </div>
                            <div className="right-side-bar-contact-container">
                                <div className="contact-header">
                                    <span>Người liên hệ</span>
                                    <div className="contact-header-action-container">
                                        <div className="contact-action-icon">
                                            <BsCameraVideoFill style={{ margin: 'auto' }} />
                                        </div>
                                        <div className="contact-action-icon">
                                            <BsSearch style={{ margin: 'auto' }} />
                                        </div>
                                        <div className="contact-action-icon">
                                            <IoIosMore style={{ margin: 'auto' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-users-container">
                                    {homeContactUserData?.map((item, index) => {
                                        return (
                                            <div
                                                className="contact-user"
                                                id={index}
                                                key={index}
                                                onClick={(e) => showMessWindow(e)}
                                            >
                                                <img
                                                    src={item.userSrcImg}
                                                    className="contact-user__img"
                                                    alt="avt user"
                                                />
                                                <span>{item.nameUser}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mess-window-and-bubble-wraper-container">
                        <div className="mess-window-wraper">
                            {messState.messWindowArray.map((item, index) => {
                                return <ChatWindow key={index} id={index} />;
                            })}
                        </div>
                        <div className="mess-bubble-container">
                            <div className="mess-bubble-item">
                                <HiOutlinePencilAlt style={{ margin: 'auto' }} />
                            </div>
                            {messState.messBubbleArray.map((item, index) => {
                                return (
                                    <div
                                        className="mess-bubble-item"
                                        key={index}
                                        id={index}
                                        onClick={(e) => handelHideMessBubble(e)}
                                    >
                                        <img className="mess-bubble-item__img" src={userSrcImg} />
                                        <div
                                            className="mess-buble-item-icon-container"
                                            onClick={handleDeleteMessBubble}
                                        >
                                            <RxCross2 style={{ margin: 'auto', fontWeight: 600 }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
