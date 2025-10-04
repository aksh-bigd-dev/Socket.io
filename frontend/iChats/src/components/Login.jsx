import React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
const Login = () => {
    const {register, handleSubmit, watch,formState: {errors,isSubmitting}} = useForm();
    const onSubmit = async (data) => {
        await delay(4);
        console.log(data)
    }
    const delay = (d) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, d*1000);
      })
    }
    
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-[url('./assets/space.jpg')] bg-no-repeat object-bottom-right bg-cover">
            <div className='w-2/5 h-3/4 rounded-lg flex flex-col justify-center items-center '>
                <div className='flex flex-col w-full h-1/3 justify-center items-center'>
                    <h3 className='text-4xl font-bold text-white'>Welcome to iChats</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full h-1/3 justify-center items-center gap-5 mt-8'>
                    <h2 className='text-2xl text-white'>Login to your account</h2>
                    {isSubmitting && <span className='text-green-500'>Submitting...</span>}
                    {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
                    <input  className="w-2xs p-2 rounded-3xl border-2 border-gray-400" {...register("username",{required:"username is required",minLength:{value:4,message:"Username must be atleast 4 characters long"},maxLength:{value:16,message:"Username lenght cannot exceed 16 characters"}})} placeholder="Enter your username" />
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    <input type='password' className='w-2xs p-2 rounded-3xl border-2 border-gray-400 '{...register("password",{required:"password is required",minLength:{value:8,message:"password must be atleast 8 characters long"}})} placeholder='Enter your password'/>
                    <input disabled={isSubmitting} type='submit' className='text-white bg-indigo-500 p-3 rounded-3xl'value="Continue Securely"/>
                </form>
                <div className='w-full h-1/3 flex justify-center items-center '>
                    <ul className='flex justify-between items-center gap-5 mt-8 list-none'>
                        <li><Link className='underline' to='/Forgot'>Forgot password ?</Link></li>
                        <li><Link className="underline" to='/Register'>Don't have an account ? Sign up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login
