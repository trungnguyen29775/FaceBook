import { useParams } from 'react-router-dom';
import './profile.css';
import { useEffect, useState } from 'react';
import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai';
import { FaCamera } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';
import { IoIosMore } from 'react-icons/io';
import Main from './subcomponent/main/main';
function Profile() {
    const { username } = useParams();

    //    Use State
    const [profileNav, setProfileNav] = useState('main');

    // Use Effect
    useEffect(() => {
        console.log(username);
    }, [username]);

    return (
        <div className="profile-wraper">
            <div className="profile-header-container">
                <div className="profile-header--center">
                    <div className="profile-background-avt-container">
                        <div className="profile-background-container"></div>
                        <div className="profile-avt-container">
                            <div className="profile-avt__div--circle">
                                <img
                                    alt="avt user"
                                    src="/assets/image/avt-user-login.jpg"
                                    className="profile-avt__img"
                                />
                                <div className="profile-avt-icon">
                                    <FaCamera style={{ margin: 'auto' }} />
                                </div>
                            </div>
                            <div className="profile-name-friend-user-container">
                                <span className="name">Trung Nguyễn</span>
                                <span className="friend">178 bạn bè</span>
                            </div>

                            <div className="profile-edit-container">
                                <div className="profile-edit-button-container">
                                    <button className="profile-add-story">
                                        <AiOutlinePlus fontSize={'16px'} />
                                        <span>Thêm vào tin</span>
                                    </button>
                                    <button>
                                        <HiPencil fontSize={'16px'} />
                                        <span>Chỉnh sửa trang cá nhân</span>
                                    </button>
                                </div>
                                <div className="profile-avt-down-button">
                                    <BiChevronDown />
                                </div>
                            </div>
                        </div>
                        <div className="profile-navigation-container">
                            <div className="profile-navigation">
                                <span className="active">Bài viết</span>
                                <span>Giới thiệu</span>
                                <span>Bạn bè</span>
                                <span>Ảnh</span>
                                <span>Video</span>
                                <span>Reels</span>
                                <span>
                                    Xem thêm <AiFillCaretDown />
                                </span>
                            </div>
                            <div className="profile-avt-down-button">
                                <IoIosMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-content-container">{profileNav === 'main' ? <Main /> : 'Hello'}</div>
        </div>
    );
}
export default Profile;
