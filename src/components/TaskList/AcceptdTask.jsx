import React from 'react'

const AcceptdTask = ({data}) => {
  return (
      <div className="flex-shrink-0 bg-yellow-400 p-3 border-none rounded-lg w-[200px] h-auto">
        <div className="flex items-center justify-between mb-2">
        <h5 className="border-none rounded-lg bg-red-500 px-2">{data.category}</h5>
        <span>{data.date }</span>
        </div>
      <h1 className="text-lg font-bold mb-2">{data.title }</h1>
        <p className="text-sm leading-relaxed">
         {data.description}
          </p>
          <div className='flex justify-between mt-3'>
              <button className='bg-green-400 border-none rounded-lg p-3'>Completed</button>
              <button className='bg-red-400 border-none rounded-lg p-3'>Failed</button>
          </div>
      </div>
  )
}

export default AcceptdTask