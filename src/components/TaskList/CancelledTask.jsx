import React from 'react'

const CancelledTask = ({data}) => {
  return (
     <div className="flex-shrink-0 bg-red-400 p-3 border-none rounded-lg w-[200px] h-auto">
        <div className="flex items-center justify-between mb-2">
          <h5 className="border-none rounded-lg bg-red-300 px-2">{data.category}</h5>
          <span>{data.date }</span>
        </div>
        <h1 className="text-lg font-bold mb-2">{data.title }</h1>
        <p className="text-sm leading-relaxed">
         {data.description}
          </p>
             <div className='flex justify-center mt-3'>
              <button className='bg-red-700 border-none rounded-lg p-3'>Failed</button>
          </div>
      </div>
  )
}

export default CancelledTask