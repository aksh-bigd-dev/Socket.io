import React from 'react'
import logo from '../assets/wlogo.png'
const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-[url('./assets/space.jpg')] bg-no-repeat object-bottom-right bg-cover">
            <div className='w-2/5 h-3/4 bg-white opacity-20 rounded-lg flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-30 h-30' src={logo} alt="error 404" />
                    <h3>Welcome to iChats</h3>
                </div>
                <div>
                    <h2>Login to your account</h2>
                    <input type="text" name="username" id="username" placeholder='Enter your username' />
                    <input type="password" name="password" id="password" placeholder='Enter your password'/>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Login
