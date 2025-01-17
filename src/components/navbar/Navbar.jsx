import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <>
          <h2 className='text-white text-[180px] '>{count}</h2>
    </>
  )
}

export default Navbar