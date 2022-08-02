import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { QuestionDisplay } from './components/QuestionDisplay'
import { AddQuestion } from './components/AddQuestion'
import { QuestionList } from './components/QuestionList'
import { DefaultDisplay } from './components/DefaultDisplay'
import { Spinner } from './components/Spinner'

export const App = () => {
  const [questions, setQuestions] = useState([])
  const [user, setUser] = useState('')
  const [msg, setMsg] = useState('')
  const [clicked, setClicked] = useState(false)
  const [questionText, setQuestionText] = useState('')
  const [selected, setSelected] = useState('')

  const loggedIn = (user !== '' && user !== undefined)

  axios.defaults.withCredentials = true

  useEffect(() => {
    const intervalID = setInterval(async () => {
      try {
        const { data } = await axios.get('https://qna-platform-cw-lite.herokuapp.com/api/questions')
        setQuestions(data)
      } catch (e) {
        setMsg('error while fetching questions')
      }
    }, 2000)
    return () => clearInterval(intervalID)
  }, [])

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await axios.get('https://qna-platform-cw-lite.herokuapp.com/api/status')
        setUser(data)
      } catch (e) {
        setMsg('error while fetching logged in user')
      }
    }
    getSession()
  }, [])

  const logOut = async () => {
    try {
      await axios.post('https://qna-platform-cw-lite.herokuapp.com/account/logout')
      setUser('')
    } catch (e) {
      window.alert(e.response.data)
    }
  }

  const add = async () => {
    try {
      await axios.post('https://qna-platform-cw-lite.herokuapp.com/api/questions/add', { questionText })
    } catch (e) {
      window.alert(e.response.data)
    }
  }

  return (
      <>
      <div className='grid grid-cols-12 gap-2 items-center'>
        <h1 className='col-span-9 m-2 p-5 text-5xl font-bold text-violet-600 drop-shadow-lg'> CAMPUS WIRE LITE </h1>
        {
          loggedIn && (
            <>
              <p className='col-span-2 text-lg'>You are logged in as {' '}
                <span className='font-bold text-violet-500'>
                  {user}
                </span>
              </p>
              <button className='col-span-1 m-3 shadow bg-red-500 hover:bg-red-400
              focus:shadow-outline focus:outline-none text-white font-bold
              py-2 px-4 rounded-full' type='button' onClick={() => logOut()}>
                Log out
              </button>
            </>
          )
        }
        {
          !loggedIn && (
            <>
              <div className='col-span-2'></div>
              <Link to='/login'>
                <button type='button'
                className='shadow bg-purple-500 hover:bg-purple-400
                focus:shadow-outline focus:outline-none
                text-white font-bold py-2 px-4 rounded-full'>
                  Login
                </button>
              </Link>
            </>
          )
        }
      </div>
      <div className='bg-purple-100 min-h-screen'>
        {
          msg !== '' && (
            <p>{msg}</p>
          )
        }
        {
          loggedIn && (
            <>
              <button className='shadow ml-5 mt-5 mb-1 bg-purple-500 hover:bg-purple-400
              focus:shadow-outline focus:outline-none
              text-white font-bold py-2 px-4 rounded-full text-lg' type='button'
              onClick={() => setClicked(true)}>
                Add New Question
              </button>
              {
                clicked && (
                  <>
                  <AddQuestion setClicked={setClicked} setQuestionText={setQuestionText} add={add}></AddQuestion>
                  </>
                )
              }
            </>
          )
        }
        <div className='grid grid-flow-col grid-col-12'>
          <div className='p-2 m-2 col-span-11 max-h-screen overflow-y-auto'>
            {
              questions.length === 0 && (<Spinner></Spinner>)
            }
            {questions.map(question =>
            <QuestionList questionText={question.questionText} _id={question._id} selected={selected} setSelected={setSelected} key={question._id}>
            </QuestionList>
            )}
          </div>
          <div className='col-span-1 self-auto'>
            {
              selected === '' && (
                <div className='mr-3 p-5 w-[64rem]'>
                  <DefaultDisplay></DefaultDisplay>
                </div>
              )
            }
            {
            selected !== '' && (
              <div className='mr-3 p-5 w-[64rem]'>
                <QuestionDisplay user={user}
                questionText={questions.filter(question => question._id === selected)[0].questionText}
                author={questions.filter(question => question._id === selected)[0].author}
                answer={questions.filter(question => question._id === selected)[0].answer}
                _id={selected} setSelected={setSelected}>
                </QuestionDisplay>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </>
  )
}
