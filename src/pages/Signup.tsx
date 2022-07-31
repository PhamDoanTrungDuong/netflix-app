// @ts-nocheck
import { async } from '@firebase/util'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      try {
        await signUp(email, password);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div className='w-full h-full'>
      <div>
        <img className='block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/742c60c5-23e0-4b61-8b0e-f434c157f9e6/VN-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-gradient-to-b from-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded-sm focus:outline-none' type="email" placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded-sm focus:outline-none' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 border border-red-600 hover:bg-transparent duration-300 py-3 my-6 rounded-lg font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-gray-600 text-sm'>
                  <p><input id='rm' className='mr-2' type="checkbox" /><label htmlFor="rm" className='cursor-pointer'>Remember me</label></p>
                  <p className='cursor-pointer hover:text-red-600 duration-200'>Need Help?</p>
                </div>
                <p className='py-5'><span className='text-gray-300'>Already subcribed to Netflix? </span> <span className='text-lg ml-2 hover:text-red-600 duration-200 cursor-pointer underline underline-offset-2'><Link to='/login'>
                Sign In
                </Link></span></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup