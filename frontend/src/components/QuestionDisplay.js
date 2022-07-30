import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Card, Textarea, Label } from 'flowbite-react/lib/esm/components'

export const QuestionDisplay = ({ user, questionText, author, answer, _id, setSelected }) => {
  const [newAnswer, setNewAnswer] = useState('')

  const submitAnswer = async () => {
    try {
      console.log(newAnswer)
      const { data } = await axios.post('http://localhost:3000/api/questions/answer', { _id, answer: newAnswer })
      console.log(data)
      setNewAnswer('')
    } catch (e) {
      window.alert(e.response.data)
    }
  }

  const deletePost = async () => {
    try {
      const { data } = await axios.delete('http://localhost:3000/api/questions/delete', { data: { _id, author } })
      setSelected('')
      console.log(data)
    } catch (e) {
      window.alert(e.response.data)
    }
  }

  return (
    <>
      <Card>
        <div className='m-2 p-2'>
          <div className='grid grid-flow-col'>
            <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
              {questionText}
            </h5>
            {
              user === author && (
                <button type='button' onClick={() => deletePost()} className='justify-self-end
                text-red-400 bg-transparent hover:bg-gray-200 hover:text-red-600 rounded-lg
                text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                data-modal-toggle='authentication-modal'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none'
                  viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 7l-.867 12.142A2 2 0 0116.138
                    21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              )
            }
          </div>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            Posted by: {author}
          </p>
          <p className='mb-8 text-base text-gray-900 dark:text-white sm:text-xl'>
            Answer: {answer}
          </p>
          {
            (user !== undefined && user !== '') && (
              <div id='textarea'>
                <div className='mb-2 block'>
                  <Label
                  htmlFor='comment'
                  value='Your answer'
                  />
                </div>
                <Textarea
                  id='comment'
                  placeholder='Answer the question...'
                  value={newAnswer}
                  required={true}
                  rows={6}
                  onChange={e => setNewAnswer(e.target.value)}
                />
                <div className='m-3'></div>
                <button onClick={() => submitAnswer()} type='submit' className='mb-2 mt-2 w-full text-white bg-blue-700
                hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Submit Answer
                </button>
              </div>
            )
          }
        </div>
      </Card>
    </>
  )
}

QuestionDisplay.propTypes = {
  user: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired
}
