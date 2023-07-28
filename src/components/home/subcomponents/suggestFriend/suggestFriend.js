import './suggestFriend.css';
import { IoIosMore } from 'react-icons/io';
import { IoPersonAddSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';
function SuggestFriend() {
    const srcImg = 'assets/image/avt-user-login.jpg';
    const [scrollLeftButton, setScrollLeftButton] = useState(false);
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

    const handleReelsScrollLeft = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const slideContainer = document.querySelector('.home-suggest-friend-content-container');
        slideContainer.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
        const scrollPosition = slideContainer.scrollLeft;
        console.log(scrollPosition);
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return (
                        <div className="home-suggest-friend-item">
                            <div className="home-suggest-icon-container--absolute">
                                <RxCross2 style={{ margin: 'auto' }} />
                            </div>

                            <img src={srcImg} className="home-suggest-user__img" />

                            <div className="suggest-friend-detail-container">
                                <span>Trung Nguyễn</span>
                                <span className="suggest-friend-detail__span"> 13 bạn chung</span>
                            </div>
                            <button className="add-friend__button">
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
export default SuggestFriend;
