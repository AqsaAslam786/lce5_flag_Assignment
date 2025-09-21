import React, { Component } from 'react'

export class Panama_Flag extends Component {
  render() {
    return (
      <div className='bg-green-700 w-120 h-70 flex flex-wrap'>
        <div className='bg-white w-60 h-1/2 flex justify-center items-center'>
        <div className='w-20 h-20 bg-blue-950 clip-path-star mx-auto'></div>
        </div>
        <div className='bg-red-700 w-60 h-1/2'></div>
        <div className='bg-blue-950 w-60 h-1/2'></div>
        <div className='bg-white w-60 h-1/2 flex items-center justify-center'>
        <div className='w-20 h-20 bg-red-700 clip-path-star mx-auto'></div>
        </div>

      </div>
    )
  }
}

export default Panama_Flag
