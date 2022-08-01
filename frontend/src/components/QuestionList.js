import React from 'react'

export const QuestionList = ({ questionText, _id, selected, setSelected }) => {
  const handleClick = () => {
    setSelected(_id)
  }

  const checkSelected = selected === _id
  const style = 'overflow-hidden block m-1 p-5 w-auto max-w-lg bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
  const conditionStyle = 'overflow-hidden block m-1 p-5 w-auto max-w-lg bg-gray-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'

  return (
    <>
      <a href='#' onClick={() => handleClick()} className={checkSelected ? conditionStyle : style }>
        <h5 className='mb-2 text-xl tracking-tight text-gray-900 dark:text-white'>
          {questionText}
        </h5>
      </a>
    </>
  )
}
