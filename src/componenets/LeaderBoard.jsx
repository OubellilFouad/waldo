import React from 'react'
import { useResultContext } from '../context/ResultContext'
import { Link } from 'react-router-dom';

const LeaderBoard = () => {
  const {players,setSeconds,setMinutes,setHidden,setStart} = useResultContext();
  const handleClick = () => {
    setHidden(false);
    setStart(false);
    setMinutes(0);
    setSeconds(0);
  }
  return (
    <div className='flex flex-col py-16 px-20 gap-6 items-center'>
        <h1 className='text-2xl font-bold flex w-full justify-center'>LeaderBoard</h1>
        <Link to={'/'}>
            <button onClick={() => handleClick()} className='py-3 px-5 rounded-lg bg-slate-900 text-white'>Play again</button>
        </Link>
        <div className='flex flex-col w-full shadow-lg rounded-xl border-slate-400 border overflow-hidden'>
            <div className='flex w-full gap-3 font-bold'>
                <span className='flex-[0.301] border-r-2 border-slate-400'></span>
                <span className='flex-[2] border-r-2 border-slate-400 p-4'>Name</span>
                <span className='flex-1 border-r-2 border-slate-400 p-4'>Time</span>
                <span className='flex-1 p-4'>Score</span>
            </div>
            {players.map((player,index) => {
                const {name,score,time} = player;
                return(
                    <div className='flex w-full gap-3 border-t-slate-400 border' key={index}>
                        <span className='flex-[0.3] border-r-2 border-slate-400 flex justify-center items-center'>{index + 1}</span>
                        <span className='flex-[2] border-r-2 border-slate-400 p-4'>{name}</span>
                        <span className='flex-1 border-r-2 border-slate-400 p-4'>{time}</span>
                        <span className='flex-1 p-4'>{score}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default LeaderBoard