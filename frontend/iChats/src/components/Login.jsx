import React from 'react'
import logo from '../assets/wlogo.png'
const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-[url('./assets/space.jpg')] bg-no-repeat object-bottom-right bg-cover">
            <div className='w-2/5 h-3/4 rounded-lg flex flex-col justify-center items-center '>
                <div className='flex flex-col w-full h-1/3 justify-center items-center'>
                    <h3 className='text-4xl font-bold text-white'>Welcome to iChats</h3>
                </div>
                <div className='flex flex-col w-full h-1/3 justify-center items-center gap-5 mt-8'>
                    <h2 className='text-2xl text-white'>Login to your account</h2>
                    <input  className='w-2xs p-2 rounded-3xl border-2 border-gray-400' type="text" name="username" id="username" placeholder='Enter your username' />
                    <input className='w-2xs p-2 rounded-3xl border-2 border-gray-400 '  type="password" name="password" id="password" placeholder='Enter your password'/>
                    <button className='text-white bg-indigo-500 p-3 rounded-3xl'>Continue Securely</button>
                </div>
                <div className='w-full h-1/3 flex justify-center items-center '>
                    <ul className='flex justify-between items-center gap-5 mt-4 list-none'>
                        <li className='underline'>Forgot password ?</li>
                        <li className='underline'>Don't have an account ? Sign up</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login
