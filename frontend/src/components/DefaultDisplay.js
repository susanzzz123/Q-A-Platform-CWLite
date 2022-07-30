import React from 'react'
import { Card } from 'flowbite-react/lib/esm/components'
import { Link } from 'react-router-dom'

export const DefaultDisplay = () => {
  return (
    <>
      <Card>
        <div className='m-2 p-2'>
          <p className='mb-6 text-base text-gray-900 dark:text-white sm:text-xl'>
            Welcome to Campus Wire Lite! This is a Q&A platform where you can post
            your question and have it answered by other users! Start by signing up for an account {' '}
            <text className='font-bold text-purple-500 underline'><Link to='/signup'>here</Link></text>.
            Once you are logged in, you can post your question, browse questions posted by other people,
            or answer their questions anonymously!
          </p>
        </div>
      </Card>
    </>
  )
}
