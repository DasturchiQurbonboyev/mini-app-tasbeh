import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { dec, increment } from '../../context/counter';

const Main = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const [incNum, setIncNum] = useState(0)
    const [decNum, setDecNum] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        var incrementNum = e.target.elements.increment.value;
        setIncNum((+incrementNum >= 0 ? +incrementNum : 0) ? +incrementNum : 0)
        setDecNum((+incrementNum > count ? +incrementNum : 0) + 1 ? +incrementNum : 0)
    };


  return (
       <div className='mx-auto max-w-[800px] w-full ' >
            <form className="form-horizontal flex gap-[10px] flex-col items-center" onSubmit={onSubmit}>
                <div className='mt-[50px] flex justify-center items-center gap-[4px]'>
                    <input className='border-none bg-[#222222] py-1  rounded-[50px] text-white outline-none px-2 pl-[20px] w-[160px]  form-control' placeholder="Enter number" type="number" name="increment" />
                    <button className='border-none rounded-[50px]  bg-[#222222] py-1 text-white px-4' type="submit">Save</button>
                    <a className='text-white bg-[#222222] rounded-[50px] py-1 px-4    ' href="">reset</a>
                </div>
                <Navbar />
                <div className='flex flex-col justify-center items-center'>
                    <button type='button' className='border-[10px] border-[#000] active:border-[#00EA86] active:bg-[#007543]   rounded-[50%] bg-[#01301C] text-[#00EA86] p-2' onClick={() => dispatch(increment(incNum ? incNum : 1))}><GoChevronUp className='size-[150px]' /></button>
                    <button disabled={(count - decNum <= 0)} type='button' className='-mt-[60px] border-[#000] active:bg-[#007543] active:border-[#00EA86] border-[10px] rounded-[50%] bg-[#01301C] text-[#00EA86] p-2' onClick={() => dispatch(dec(decNum ? decNum : 1))}><GoChevronDown className='size-[50px]' /></button>
                </div>
            </form>
        </div>
  )
}

export default Main