import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useResultContext } from '../context/ResultContext'
import { db } from '../firebase';

const Finish = () => {
  const {finish,setFinish,minutes,seconds} = useResultContext();
  const [name,setName] = useState('');
  const colRef = collection(db,'players');
  const handleFinish = () => {
      let time = `${minutes.toLocaleString().length===1?'0' + minutes: minutes}:${seconds.toLocaleString().length===1?'0'+seconds:seconds}`
      let score = Math.round(100/(minutes * 60 + seconds));
      addDoc(colRef,{name: name,time: time,score: score});
      setFinish(false);
  }
  return (
    <div className={`w-screen h-screen bg-[rgb(0,0,0,.5)] absolute top-0 justify-center items-center ${finish?'flex':'hidden'}`}>
        <div className='flex flex-col gap-10 w-[50%] p-6 bg-white rounded-xl items-center'>
            <h1 className='text-2xl font-bold'>Congratulations!</h1>
            <p>Enter your name to be added to the leaderboard!</p>
            <div className='flex gap-2 w-[60%]'>
                <input onChange={(e)=>setName(e.target.value)} type="text" className='border-slate-900 border-[2px] rounded-lg p-2 flex-1' placeholder='enter your name' required/>
                <Link to={'/leaderboard'}>
                    <button onClick={()=>handleFinish()} className='py-3 px-7 bg-slate-900 text-white rounded-lg'>Add</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Finish