import React from 'react'

const App = () => {
  return (
    <div className='@container border p-4'>
      <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4">
        <div className='bg-blue-500 h-40'></div>
        <div className='bg-green-500 h-40'></div>
        <div className='bg-red-500 h-40'></div>
        <div className='bg-yellow-500 h-40'></div>
      </div>
    </div>
  )
}

export default App
