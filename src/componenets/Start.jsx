import React from 'react'
import { useResultContext } from '../context/ResultContext'

const Start = () => {
  const {characters,hidden,setHidden,setStart} = useResultContext();
  const handleStart = () => {
    setHidden(true);
    setStart(true);
  }
  return (
    <div className={`w-screen h-screen bg-[rgb(0,0,0,.5)] absolute top-0 justify-center items-center ${hidden?'hidden':'flex'}`}>
        <div className='flex flex-col gap-14 w-[50%] p-6 bg-white rounded-xl items-center'>
            <h1 className='text-2xl font-bold'>Find the following characters</h1>
            <div className='flex gap-20'>
                {characters.map((character) => {
                    const {img,id} = character;
                    return(
                        <img src={img} key={id} className='w-16' alt="" />
                    )
                })}
            </div>
            <button onClick={() => handleStart()} className='py-3 px-7 bg-slate-900 text-white rounded-lg'>Start</button>
        </div>
    </div>
  )
}

export default Start