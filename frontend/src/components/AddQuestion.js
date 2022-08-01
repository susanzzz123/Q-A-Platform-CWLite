import React from 'react'

export const AddQuestion = ({ setClicked, setQuestionText, add }) => {
  const handleClick = () => {
    add()
    setClicked(false)
  }
  return (
    <>
      <div id='defaultModal' tabIndex='-1' aria-hidden='true' className='grid grid-cols-6 bg-gray-400/40
      w-full overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full'>
        <div className='col-span-1'></div>
        <div className='relative p-3 w-full max-w-md h-full md:h-auto'>
          <div className='w-[62rem] h-[25rem] relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button type='button' onClick={() => setClicked(false)} className='absolute top-3 right-2.5
            text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm
            p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'>
              <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414
              0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10
              11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'></path></svg>
              <span className='sr-only'>Close modal</span>
            </button>
            <div className='py-6 px-6 lg:px-8'>
              <h3 className='mt-3 mb-6 text-2xl font-medium text-gray-900 dark:text-white'>
                New Draft
              </h3>
              <form className='space-y-6' action='#'>
                <div>
                  <label htmlFor='password' className='block mb-2 text-lg font-medium
                  text-gray-900 dark:text-gray-300'>
                    Question:
                  </label>
                  <textarea onChange={e => setQuestionText(e.target.value)} placeholder='Question text:'
                  className='h-40 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required />
                </div>
                <button onClick={() => handleClick()} type='submit' className='w-full text-white bg-blue-700
                hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Post your question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
