import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'flowbite-react'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()

  const timeOut = () => {
    navigate('/')
    setSuccess(false)
  }

  const loginUser = async () => {
    try {
      const { data } = await axios.post('https://qna-platform-cw-lite.herokuapp.com/account/login', { username, password })
      setMsg(data)
      setSuccess(true)
      window.setTimeout(() => timeOut(), 2500)
    } catch (e) {
      window.alert(e.response.data)
    }
  }

  return (
    <>
      {
        success && (
          <Alert className='p-4 mb-4' color='success'>
            <span className='text-lg'>
              <span className='font-medium'>
                {msg}
              </span>
              {' '}Returning to home page in a few seconds.
            </span>
          </Alert>
        )
      }
      <div className='grid h-screen place-items-center bg-purple-100'>
        <div className='bg-white border-2 w-full h-2/4 max-w-2xl shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mt-12 mb-5 mx-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Username
            </label>
            <input
            className='shadow appearance-none
            first-letter:border rounded w-full py-2 px-3
            text-gray-700 leading-tight
            focus:outline-none focus:shadow-outline'
            id='username' type='text' placeholder='username:'
            onChange={e => setUsername(e.target.value)} required/>
          </div>
          <div className='mb-6 mx-4'>
            <label className='block text-gray-700 text-lg font-bold mb-2'>
              Password
            </label>
            <input className='shadow appearance-none border
            rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight
            focus:outline-none focus:shadow-outline'
            id='password' type='password' placeholder='password:'
            onChange={e => setPassword(e.target.value)} required/>
          </div>
          <div className='flex items-center justify-between mx-4'>
            <button className='shadow bg-purple-500
            hover:bg-purple-400 focus:shadow-outline
            focus:outline-none text-white font-bold
            py-2 px-4 rounded-full text-md' onClick={() => loginUser()} type='button'>
              Log In
            </button>
            <p className='inline-block align-baseline
            font-bold text-md text-blue-500 hover:text-blue-800'>
              <Link to='/signup'>Click here to sign up! </Link>
            </p>
          </div>
          <p className='mt-16 text-center text-gray-500 text-xs'>
            Campus Wire Lite
          </p>
        </div>
      </div>
    </>
  )
}
