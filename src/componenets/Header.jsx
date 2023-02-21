import React, { useEffect, useState } from 'react'
import { useResultContext } from '../context/ResultContext'

const Header = () => {
  const {characters,found,seconds,minutes,setSeconds,setMinutes,start,finish} = useResultContext();
  let timer;
  useEffect(()=>{
    if(start){
      timer = setInterval(()=>{
        setSeconds(seconds+1);
        if(seconds === 59){
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      },1000)
      return () => clearInterval(timer)
    }
  })

  return (
    <div className='flex justify-between px-20 py-7 bg-slate-900 text-white items-center header'>
        <span className='text-2xl font-bold flex-1'>Find the characters</span>
        <span className='text-lg flex-1 flex items-center justify-center gap-12'>
          {characters.map((character) => {
            const {img,id,name} = character;
            let foundVar= found.includes(name)?true:false;
            return(
              <img src={img} key={id} className={`w-10 ${foundVar?'opacity-40':'opacity-100'}`} alt="" />
            )
          })}
        </span>
        <span className='text-xl font-bold flex-1 flex justify-end items-center'>{minutes.toLocaleString().length===1?'0' + minutes: minutes}:{seconds.toLocaleString().length===1?'0'+seconds:seconds}</span>
    </div>
  )
}

export default Header