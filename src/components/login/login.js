import './login.css'
import React from 'react'
import src from '../../constant/src'
import { AiFillPlusCircle } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import Date from '../../constant/date';

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {   
            email:""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleExitRegister = this.handleExitRegister.bind(this)
        this.handleCreateAccountClick= this.handleCreateAccountClick.bind(this)
    }

    handleCreateAccountClick(event)
    {
        event.preventDefault()
        const registerContainer = document.querySelector('.register-container')
        registerContainer.classList.remove('hide')
    }
   handleExitRegister(event)
   {
    event.stopPropagation()
    const registerContainer = document.querySelector('.register-container')
    registerContainer.classList.add('hide')
   }
   handleChangeEmail(event)
   {
    this.setState({email:event.target.value},()=>
    {
        const registerEmailInput = document.querySelectorAll('.register-detail__input')[1]
        if(this.state.email!="")
            registerEmailInput.classList.remove('hide')
        else
            registerEmailInput.classList.add('hide')
    })
    
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
                                 width: "50px",
                                 height: "50px",
                                 color:"#1877f2",
                                 margin:"auto"
                               }}/>
                                </div>
                               

                               <a href='#' className='name-user-login blue'>Add Account</a>
                            </a>
                        </div>
                    </div>
                    <form className='login__form'>
                        <input placeholder='Email address or phone number' className='login-input'/>
                        <input placeholder='Password' className='login-input'/>
                        <button className='login-button'>Log in</button>
                        <a href='#' className='forgot-password__a'>Forgotten password?</a>
                        <div className='line-through'></div>
                        <button className='login-create-acccount' onClick={this.handleCreateAccountClick}>Create new account</button>
                    </form>
                </div>
                
                <footer>
                    
                </footer>

                {/* Register Form */}
                <div className='register-container hide'>
                    <div className='register-content'>
                    <div className='register-header-container'>
                        <h1 className='register-header'>Sign Up</h1>
                        <p className='register-sub-header'>It's quick and easy.</p>
                        <FiX onClick={this.handleExitRegister} style={{position:"absolute", top:0,right:0,fontSize:"25px", fontWeight:600, zIndex:2,color:"gray"}}/>
                    </div>
                    <form className='register-form'>
                        <div className='register-name-container'>
                               <input placeholder='First name' className='register-name__input'/>
                               <input placeholder='Last name' className='register-name__input'/>
                               
                        </div>
                        <input type='text' onChange={this.handleChangeEmail} value={this.state.email} placeholder='Mobile number or email address' className='register-detail__input'/>
                        <input type='text' placeholder='Re-enter email address' className='register-detail__input hide'/>
                        
                        <input type='password' placeholder='New password'  className='register-detail__input'/>
                        <div className='register-dob-container'>
                        <label className='register-dob-header'>Date of birth</label>
                        <div className='register-date-container'>
                        <select className='register-date__select'>
                                {
                                    Date.day.map((item,index)=>
                                    {
                                        return(
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })
                                }
                               
                            </select>
                            <select className='register-date__select'>
                            {
                                    Date.month.map((item,index)=>
                                    {
                                        return(
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                            <select className='register-date__select'>
                            {
                                    Date.year.map((item,index)=>
                                    {
                                        return(
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                            
                            
                        </div>
                        <div className='register-gender-container'>
                            <label className='register-gender__label'>
                                Gender
                            </label>
                            <div className='register-gender-input-container'>
                                <div className='register-gender' >
                                <label for="female" >Female
                                    </label>
                                    <input  id="female" name="gender" type='radio'/>

                                </div>
                               <div className='register-gender'>
                               <label for="male" >Male
                                    </label>
                                    <input id="male" name="gender" type='radio'/>

                               </div>
                                    <div className='register-gender'>
                                    <label for="other" >Other
                                    </label>
                                    <input id="other" name="gender" type='radio'/>

                                    </div>
                                    
                            </div>
                                    
                           
                        </div>
                        <div>
                        </div>
                        <p className='register-terms'>People who use our service may have uploaded your contact information to Facebook. <a href='#' className='register-term__a'>Lear more.</a></p>
                        <p className='register-terms'>By clicking Sign Up, you agree to our <a href='#' className='register-term__a' >Terms, Privacy Policy</a> and <a className='register-term__a' href='#' >Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                        <div className='register-button-container'>
                            <button className='register-sign-in__button'>Sign Up</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Login