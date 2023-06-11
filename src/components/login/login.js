import './login.css'
import React from 'react'
import src from '../../constant/src'
import { AiFillPlusCircle } from "react-icons/ai";
class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {

        }
    }
    render()
    {
        return(
            <div className='login-container'>

                <div className='content-container'>
                    <div className='content1'>
                        <div className='facebook-image-container'>
                            <img src={src.facebookImage} className='facebook__image'/>
                        </div>
                        <h2 className='recent-login__h2'>Recent Logins</h2>
                        <h3 className='recent-login__h3'>Click your picture or add an account.</h3>
                        <div className='recent-user-login-container'>
                            <a className='user-login-container' href='#'>
                                <img src={src.avtUserLogin[0]} alt="avatar user" className='avt-user__image'/>
                                <div className='name-user-login-container'>
                                <h2 className='name-user-login'>Nguyễn</h2>

                                </div>

                            </a>
                            <a className='add-user-login-container' href='#'>
                                <div className='add-user-login-icon-container'>
                                <AiFillPlusCircle style={{
                                 width: "42px",
                                 height: "42px",
                                 color:"#1877f2",
                                 margin:"auto"
                               }}/>
                                </div>
                               

                               <a href='#' className='name-user-login blue'>Add Account</a>
                            </a>
                        </div>
                    </div>
                    <form className='login__form'>
                        <input placeholder='Email address or phone number'/>
                        <input placeholder='Password'/>
                        <button>Login</button>
                        <a href='#'>Forgotten password?</a>
                        <div>
                            <button>Create new account</button>
                        </div>
                    </form>
                </div>

                <footer>

                </footer>
            </div>
        )
    }
}
export default Login