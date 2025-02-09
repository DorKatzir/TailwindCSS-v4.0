import React from 'react'

const App = () => {
  return (
    <div className='bg-deepblue p-12 container'>
      <h1 className='text-5xl font-bold text-white'>
        This is a React app with Tailwind CSS v4.0
      </h1>
      <button className="bg-amber border-4 text-alabaster text-2xl font-bold mt-12 rounded px-6 py-4">
        Click here!
      </button>
      <input type="text" placeholder='Enter your name' className='bg-white text-lg text-amber border-2 p-4 rounded ml-4 outline-0' />
    </div>
  )
}

export default App
