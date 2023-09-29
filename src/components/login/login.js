import './login.css';
import React, { useContext, useEffect, useState } from 'react';
import src from '../../constant/src';
import { AiFillPlusCircle, AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import Date from '../../constant/date';
import AuthenContext from '../../store/authenContext';
import instance from '../../axios';
import { loginSucceedAction } from '../../store/authenAction';
import registerCheck from '../../ulti/registerCheck';
function Login() {
    const [authenState, dispatchAuthenState] = useContext(AuthenContext);

    const [userLogged, setUserLogged] = useState([
        {
            name: 'Nguyễn',
            avtUrl: 'assets/image/avt-user-login.jpg',
        },
        {
            name: 'Nguyễn',
            avtUrl: 'assets/image/avt-user-login.jpg',
        },
        {
            name: 'Nguyễn',
            avtUrl: 'assets/image/avt-user-login.jpg',
        },
    ]);
    const [passwordLogin, setPasswordLogin] = useState('');
    const [emailLogin, setEmailLogin] = useState('');
    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [dob, setDob] = useState({
        day: 29,
        month: 'Sep',
        year: 2002,
    });
    const [gender, setGender] = useState('Female');
    const [registerState, setRegisterState] = useState({
        usernameRegister: null,
        reUsernameRegister: null,
        passwordRegister: null,
    });

    //--------------------------------Use effect-------------------------

    //Register

    useEffect(() => {
        console.log(registerState);
    }, [registerState]);

    // ------------------------------Function------------------------------

    const handelCheckUserName = (event) => {
        event.stopPropagation();
        event.preventDefault();

        if (registerEmail) {
            if (
                registerCheck.emailCheck.test(registerEmail) === false &&
                registerCheck.phoneNumberCheck.test(registerEmail) === false
            )
                setRegisterState((prevState) => ({
                    ...prevState,
                    usernameRegister: false,
                }));
            else {
                if (registerCheck.phoneNumberCheck.test(registerEmail) === true) {
                    setRegisterState((prevState) => ({
                        ...prevState,
                        usernameRegister: true,
                    }));
                } else {
                    instance
                        .post('/register/check', {
                            email: registerEmail,
                        })
                        .then((res) => {
                            if (res.data === 'Valid email') {
                                setRegisterState((prevState) => ({
                                    ...prevState,
                                    usernameRegister: true,
                                }));
                            } else {
                                setRegisterState((prevState) => ({
                                    ...prevState,
                                    usernameRegister: false,
                                }));
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            }
        }
    };

    const handelCheckReUserName = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.value != registerEmail)
            setRegisterState((preState) => ({
                ...preState,
                reUsernameRegister: false,
            }));
        else
            setRegisterState((preState) => ({
                ...preState,
                reUsernameRegister: true,
            }));
    };

    const handleCheckPassword = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!registerCheck.passwordCheck.test(registerPassword)) {
            setRegisterState((prevState) => ({
                ...prevState,
                passwordRegister: false,
            }));
        } else {
            setRegisterState((prevState) => ({
                ...prevState,
                passwordRegister: true,
            }));
        }
    };

    const handleCreateAccountClick = (event) => {
        event.preventDefault();
        const registerContainer = document.querySelector('.register-container');
        registerContainer.classList.remove('hide');
    };

    const handleChangeEmailLogin = (event) => {
        setEmailLogin(event.target.value);
    };

    const handleChangePasswordLogin = (event) => {
        setPasswordLogin(event.target.value);
    };

    const handleChangeEmailRegister = (event) => {
        setRegisterEmail(event.target.value);
    };

    const handleChangePasswordRegister = (event) => {
        setRegisterPassword(event.target.value);
    };

    const handleChangeFirstNameRegister = (event) => {
        setRegisterFirstName(event.target.value);
    };
    const handleChangeLastNameRegister = (event) => {
        setRegisterLastName(event.target.value);
    };

    const handleChangeDay = (event) => {
        setDob((preState) => {
            return { ...preState, day: event.target.value };
        });
    };

    const handleChangeMonth = (event) => {
        setDob((preState) => {
            return { ...preState, month: event.target.value };
        });
    };

    const handleChangeYear = (event) => {
        setDob((preState) => {
            return { ...preState, year: event.target.value };
        });
    };

    const handleChangeGender = (event) => {
        setGender(event.target.id);
    };

    const handleDeleteRecentUser = (event) => {
        let indexTarget = event.target.id;
        let temp = [];
        for (let i = 0; i < userLogged.length; i++) {
            if (i == indexTarget) continue;
            temp.push(userLogged[i]);
        }
        setUserLogged(temp);
    };
    const handleLogin = (event) => {
        event.preventDefault();
        event.stopPropagation();
        instance
            .post('/login', {
                userName: emailLogin,
                password: passwordLogin,
            })
            .then((respone) => {
                if (respone.data.message === 'Authentication successful')
                    dispatchAuthenState(loginSucceedAction(respone.data));
                else console.log('Wrong ');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleExitRegister = (event) => {
        event.stopPropagation();
        const registerContainer = document.querySelector('.register-container');
        registerContainer.classList.add('hide');
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.target;
        let dobFormat = '';
        dobFormat += dob.year + '-';
        let monthFormat = '';
        switch (dob.month) {
            case 'Jan':
                monthFormat = '01';
                break;
            case 'Feb':
                monthFormat = '02';
                break;
            case 'Mar':
                monthFormat = '03';
                break;
            case 'Apr':
                monthFormat = '04';
                break;
            case 'May':
                monthFormat = '05';
                break;
            case 'Jun':
                monthFormat = '06';
                break;
            case 'Jul':
                monthFormat = '07';
                break;
            case 'Aug':
                monthFormat = '08';
                break;
            case 'Sep':
                monthFormat = '09';
                break;
            case 'Oct':
                monthFormat = '10';
                break;
            case 'Nov':
                monthFormat = '11';
                break;
            case 'Dev':
                monthFormat = '12';
                break;
            default:
                monthFormat = '01';
                break;
        }
        dobFormat += monthFormat + '-';
        let dayFormat = dob.day >= 10 ? dob.day : '0' + dob.day;
        dobFormat += dayFormat;
        console.log(registerState);
        if (registerState.passwordRegister && registerState.usernameRegister && registerState.reUsernameRegister) {
            instance
                .post('/register', {
                    userName: registerEmail,
                    registerPassword: registerPassword,
                    registerFirstName: registerFirstName,
                    registerLastName: registerLastName,
                    dob: dobFormat,
                    gender: gender,
                    avtFilePath: 'assets/image/avt-user-login.jpg',
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((e) => {
                    console.log('Can not create account due to ', e);
                });
        }
    };

    return (
        <div className="login-container">
            <div className="content-container">
                <div className="content1">
                    <div className="facebook-image-container">
                        <img src={src.facebookImage} className="facebook__image" />
                    </div>
                    <h2 className="recent-login__h2">
                        {userLogged.length > 0
                            ? 'Recent Logins'
                            : 'Facebook helps you connect and share with the people in your life.'}
                    </h2>
                    <h3 className="recent-login__h3">
                        {userLogged.length > 0 ? 'Click your picture or add an account.' : ''}
                    </h3>
                    <div className="recent-user-login-container">
                        {userLogged.map((user, key) => {
                            return (
                                <div className="user-login-container" href="#" key={key}>
                                    <a className="login-no-ui-container">
                                        <FiX
                                            id={key}
                                            key={key}
                                            onClick={handleDeleteRecentUser}
                                            style={{
                                                position: 'absolute',
                                                fontSize: '12px',
                                                fontWeight: 600,
                                                color: 'white',
                                                top: '4px',
                                                left: '4px',
                                                padding: '2px',
                                                backgroundColor: '#4b4f56',
                                                borderRadius: '10px',
                                            }}
                                        />
                                        <img src={user.avtUrl} alt="avatar user" className="avt-user__image" />
                                        <div className="name-user-login-container">
                                            <h2 className="name-user-login">{user.name}</h2>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}

                        <div
                            className="add-user-login-container"
                            style={{ display: userLogged.length > 0 ? 'flex' : 'none' }}
                        >
                            <div className="login-no-ui-container">
                                <div className="add-user-login-icon-container">
                                    <AiFillPlusCircle
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            color: '#1877f2',
                                            margin: 'auto',
                                        }}
                                    />
                                </div>
                                <div className="login-add-user__a">
                                    <a href="#" className="name-user-login blue">
                                        Add Account
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="login__form" onSubmit={handleLogin}>
                    <input
                        value={emailLogin}
                        onChange={(e) => handleChangeEmailLogin(e)}
                        placeholder="Email address or phone number"
                        className="login-input"
                    />
                    <input
                        value={passwordLogin}
                        onChange={(e) => handleChangePasswordLogin(e)}
                        placeholder="Password"
                        type="password"
                        className="login-input"
                    />
                    <button className="login-button" type="submit">
                        Log in
                    </button>
                    <a href="#" className="forgot-password__a">
                        Forgotten password?
                    </a>
                    <div className="line-through"></div>
                    <button className="login-create-acccount" onClick={handleCreateAccountClick}>
                        Create new account
                    </button>
                </form>
            </div>

            <footer></footer>

            {/* Register Form */}
            <div className="register-container hide">
                <div className="register-content">
                    <div className="register-header-container">
                        <FiX
                            onClick={handleExitRegister}
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                fontSize: '25px',
                                fontWeight: 600,
                                zIndex: 2,
                                color: 'gray',
                            }}
                        />
                        <h1 className="register-header">Sign Up</h1>
                        <p className="register-sub-header">It's quick and easy.</p>
                    </div>
                    <form className="register-form" onSubmit={(e) => handleRegisterSubmit(e)}>
                        <div className="register-name-container">
                            <input
                                onChange={(e) => handleChangeFirstNameRegister(e)}
                                placeholder="First name"
                                className="register-name__input"
                                required
                            />
                            <input
                                onChange={(e) => handleChangeLastNameRegister(e)}
                                placeholder="Last name"
                                className="register-name__input"
                                required
                            />
                        </div>
                        <div
                            className="register-input-alert"
                            style={{ display: registerState.usernameRegister === false ? 'flex' : 'none' }}
                        >
                            <span>Email or Phone number invalid or does not exist</span>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => handleChangeEmailRegister(e)}
                            value={registerEmail}
                            placeholder="Mobile number or email address"
                            className={
                                registerState.usernameRegister === false
                                    ? 'register-detail__input wrong username'
                                    : 'register-detail__input'
                            }
                            onBlur={(e) => handelCheckUserName(e)}
                            required
                        />
                        <div
                            className="register-input-alert"
                            style={{ display: registerState.reUsernameRegister === false ? 'flex' : 'none' }}
                        >
                            <span>Re-enter Email or phone number must be the same</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Re-enter email address"
                            className={
                                registerEmail.length == 0
                                    ? 'register-detail__input hide'
                                    : registerState.reUsernameRegister === false
                                    ? 'register-detail__input wrong re-username'
                                    : 'register-detail__input'
                            }
                            required
                            onBlur={(e) => handelCheckReUserName(e)}
                        />
                        <div
                            className="register-input-alert"
                            style={{ display: registerState.passwordRegister === false ? 'flex' : 'none' }}
                        >
                            <span>Password must have at least 8 characters and one capital character</span>
                        </div>
                        <input
                            onChange={(e) => handleChangePasswordRegister(e)}
                            type="password"
                            placeholder="Password"
                            className={
                                registerState.passwordRegister === false
                                    ? 'register-detail__input wrong password'
                                    : 'register-detail__input'
                            }
                            onBlur={(e) => handleCheckPassword(e)}
                            required
                        />

                        <div className="register-dob-container">
                            <label className="register-dob-header">Date of birth</label>
                            <div className="register-date-container">
                                <select
                                    className="register-date__select"
                                    onChange={(e) => handleChangeDay(e)}
                                    value={dob.day}
                                    contentEditable
                                    suppressContentEditableWarning
                                >
                                    {Date.day.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                                <select
                                    className="register-date__select"
                                    onChange={(e) => handleChangeMonth(e)}
                                    contentEditable
                                    suppressContentEditableWarning
                                >
                                    {Date.month.map((item, index) => {
                                        return (
                                            <option value={item} key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                                <select
                                    className="register-date__select"
                                    value={dob.year}
                                    contentEditable
                                    suppressContentEditableWarning
                                    onChange={(e) => handleChangeYear(e)}
                                >
                                    {Date.year.map((item, index) => {
                                        return (
                                            <option value={item} key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="register-gender-container">
                            <label className="register-gender__label">Gender</label>
                            <div className="register-gender-input-container">
                                <div className="register-gender">
                                    <label htmlFor="female">Female</label>
                                    <input
                                        id="Female"
                                        name="gender"
                                        type="radio"
                                        onChange={(e) => handleChangeGender(e)}
                                        checked={gender === 'Female'}
                                    />
                                </div>
                                <div className="register-gender">
                                    <label htmlFor="male">Male</label>
                                    <input
                                        id="Male"
                                        name="gender"
                                        type="radio"
                                        onChange={(e) => handleChangeGender(e)}
                                        checked={gender === 'Male'}
                                    />
                                </div>
                                <div className="register-gender">
                                    <label htmlFor="other">Other</label>
                                    <input
                                        onChange={(e) => handleChangeGender(e)}
                                        checked={gender === 'Other'}
                                        id="Other"
                                        name="gender"
                                        type="radio"
                                    />
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <p className="register-terms">
                            People who use our service may have uploaded your contact information to Facebook.{' '}
                            <a href="#" className="register-term__a">
                                Lear more.
                            </a>
                        </p>
                        <p className="register-terms">
                            By clicking Sign Up, you agree to our{' '}
                            <a href="#" className="register-term__a">
                                Terms, Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a className="register-term__a" href="#">
                                Cookies Policy
                            </a>
                            . You may receive SMS notifications from us and can opt out at any time.
                        </p>
                        <div className="register-button-container">
                            <button type="submit" className="register-sign-in__button">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <footer id="footer">
                <div>
                    <p>Dev by trungnguyen</p>
                </div>
                <div className="footer-icon-container">
                    <a href="https://github.com/trungnguyen29775" target="_blank">
                        <AiFillGithub style={{ color: '#737373' }} />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100010558929204">
                        <AiFillInstagram style={{ color: '#737373' }} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/trungnghiemtuc/">
                        <AiFillFacebook style={{ color: '#737373' }} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Login;
