import './suggestFriend.css';
import { IoIosMore } from 'react-icons/io';
import { IoPersonAddSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { memo, useEffect, useState } from 'react';
import instance from '../../../../axios';
function SuggestFriend({ currentUserName }) {
    const [scrollLeftButton, setScrollLeftButton] = useState(false);
    const [suggestFriendData, setSuggestFriendData] = useState([]);
    // useEffect
    useEffect(() => {
        instance
            .post('/sugesst', {
                userName: currentUserName,
            })
            .then((res) => {
                setSuggestFriendData(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    // Function
    const handleReelsScrollRight = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const slideContainer = document.querySelector('.home-suggest-friend-content-container');
        slideContainer.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
        setScrollLeftButton(true);
    };

    const handleAddFriendClick = (event) => {
        const userName = event.target.closest('.home-suggest-friend-item').id;
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1. Sử dụng phương thức padStart để chèn số 0 vào đầu nếu tháng có một chữ số.
        const day = now.getDate().toString().padStart(2, '0'); // Sử dụng phương thức padStart để chèn số 0 vào đầu nếu ngày có một chữ số.
        const formattedDate = `${year}-${month}-${day}`;
        instance
            .post('/add-friend', {
                currentUser: currentUserName,
                targetUser: userName,
                addFriendDate: formattedDate,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => console.log(e));
    };

    const handleReelsScrollLeft = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const slideContainer = document.querySelector('.home-suggest-friend-content-container');
        slideContainer.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
        const scrollPosition = slideContainer.scrollLeft;
        if (scrollPosition <= 200) setScrollLeftButton(false);
        else setScrollLeftButton(true);
    };
    return (
        <div className="home-suggest-friend">
            <button className="suggest-friend-arrow-right" onClick={handleReelsScrollRight}>
                <AiOutlineRight style={{ margin: 'auto', fontWeight: 600 }} />
            </button>

            <button
                className="suggest-friend-arrow-left"
                style={{ display: scrollLeftButton ? 'flex' : 'none' }}
                onClick={handleReelsScrollLeft}
            >
                <AiOutlineLeft style={{ margin: 'auto', fontWeight: 600 }} />
            </button>
            <div className="home-suggest-friend-header-container">
                <span>Những người bạn có thể biết</span>
                <div className="suggest-header-icon-container">
                    <IoIosMore style={{ fontSize: '15px' }} />
                </div>
            </div>
            <div className="home-suggest-friend-content-container">
                {suggestFriendData?.map((item, index) => {
                    return (
                        <div className="home-suggest-friend-item" key={index} id={item.userName}>
                            <div className="home-suggest-icon-container--absolute">
                                <RxCross2 style={{ margin: 'auto' }} />
                            </div>

                            <img src={item.avtFilePath} className="home-suggest-user__img" />

                            <div className="suggest-friend-detail-container">
                                <span>{item.firstName + ' ' + item.lastName}</span>
                                <span className="suggest-friend-detail__span"> 13 bạn chung</span>
                            </div>
                            <button className="add-friend__button" onClick={(e) => handleAddFriendClick(e)}>
                                <IoPersonAddSharp style={{ fontSize: '15px' }} />
                                <span>Thêm bạn bè</span>
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="home-suggest-footer">
                <span className="home-suggest-footer__span">Xem tất cả</span>
            </div>
        </div>
    );
}
export default memo(SuggestFriend);
