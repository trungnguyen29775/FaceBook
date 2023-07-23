import './login.css';
import React from 'react';
import src from '../../constant/src';
import { AiFillPlusCircle, AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import Date from '../../constant/date';
import { Link } from 'react-router-dom';
import { use } from 'marked';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isLogged: this.props.isLogged,
            userData: [
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
            ],
        };
        this.handleDeleteRecentUser = this.handleDeleteRecentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleExitRegister = this.handleExitRegister.bind(this);
        this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
    }
    componentDidMount() {
        console.log(this.props.isLogged);
        if (this.props.isLogged) {
            this.props.navigation.navigate('/home');
        }
    }
    handleDeleteRecentUser(event) {
        let indexTarget = event.target.id;
        console.log(indexTarget);
        let temp = [];
        for (let i = 0; i < this.state.userData.length; i++) {
            if (i == indexTarget) continue;
            temp.push(this.state.userData[i]);
        }
        this.setState({ userData: temp });
    }
    handleLogin(event) {
        event.preventDefault();
        this.props.changeStateLogged();
        this.props.navigation('/home');
    }
    handleCreateAccountClick(event) {
        event.preventDefault();
        const registerContainer = document.querySelector('.register-container');
        registerContainer.classList.remove('hide');
    }
    handleExitRegister(event) {
        event.stopPropagation();
        const registerContainer = document.querySelector('.register-container');
        registerContainer.classList.add('hide');
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value }, () => {
            const registerEmailInput = document.querySelectorAll('.register-detail__input')[1];
            if (this.state.email != '') registerEmailInput.classList.remove('hide');
            else registerEmailInput.classList.add('hide');
        });
    }
    render() {
        return (
            <div className="login-container">
                <div className="content-container">
                    <div className="content1">
                        <div className="facebook-image-container">
                            <img src={src.facebookImage} className="facebook__image" />
                        </div>
                        <h2 className="recent-login__h2">
                            {this.state.userData.length > 0
                                ? 'Recent Logins'
                                : 'Facebook helps you connect and share with the people in your life.'}
                        </h2>
                        <h3 className="recent-login__h3">
                            {this.state.userData.length > 0 ? 'Click your picture or add an account.' : ''}
                        </h3>
                        <div className="recent-user-login-container">
                            {this.state.userData.map((user, key) => {
                                return (
                                    <div className="user-login-container" href="#">
                                        <a className="login-no-ui-container">
                                            <FiX
                                                id={key}
                                                key={key}
                                                onClick={this.handleDeleteRecentUser}
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

                            <a
                                className="add-user-login-container"
                                href="#"
                                style={{ display: this.state.userData.length > 0 ? 'flex' : 'none' }}
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
                            </a>
                        </div>
                    </div>
                    <form className="login__form">
                        <input placeholder="Email address or phone number" className="login-input" />
                        <input placeholder="Password" type="password" className="login-input" />
                        <button className="login-button" onClick={this.handleLogin}>
                            Log in
                        </button>
                        <a href="#" className="forgot-password__a">
                            Forgotten password?
                        </a>
                        <div className="line-through"></div>
                        <button className="login-create-acccount" onClick={this.handleCreateAccountClick}>
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
                                onClick={this.handleExitRegister}
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
                        <form className="register-form">
                            <div className="register-name-container">
                                <input placeholder="First name" className="register-name__input" />
                                <input placeholder="Last name" className="register-name__input" />
                            </div>
                            <input
                                type="text"
                                onChange={this.handleChangeEmail}
                                value={this.state.email}
                                placeholder="Mobile number or email address"
                                className="register-detail__input"
                            />
                            <input
                                type="text"
                                placeholder="Re-enter email address"
                                className="register-detail__input hide"
                            />

                            <input type="password" placeholder="New password" className="register-detail__input" />
                            <div className="register-dob-container">
                                <label className="register-dob-header">Date of birth</label>
                                <div className="register-date-container">
                                    <select className="register-date__select">
                                        {Date.day.map((item, index) => {
                                            return (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <select className="register-date__select">
                                        {Date.month.map((item, index) => {
                                            return <option value={item}>{item}</option>;
                                        })}
                                    </select>
                                    <select className="register-date__select">
                                        {Date.year.map((item, index) => {
                                            return <option value={item}>{item}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="register-gender-container">
                                <label className="register-gender__label">Gender</label>
                                <div className="register-gender-input-container">
                                    <div className="register-gender">
                                        <label htmlFor="female">Female</label>
                                        <input id="female" name="gender" type="radio" />
                                    </div>
                                    <div className="register-gender">
                                        <label htmlFor="male">Male</label>
                                        <input id="male" name="gender" type="radio" />
                                    </div>
                                    <div className="register-gender">
                                        <label htmlFor="other">Other</label>
                                        <input id="other" name="gender" type="radio" />
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
                                <button className="register-sign-in__button">Sign Up</button>
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
}
export default Login;
