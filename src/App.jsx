import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Content from './componenets/Content'
import Finish from './componenets/Finish';
import Header from './componenets/Header'
import LeaderBoard from './componenets/LeaderBoard';
import Menu from './componenets/Menu'
import Start from './componenets/Start';
import cursor from './assets/cursor.png'
import { useResultContext } from './context/ResultContext';

function App() {
  const {choice,character,close,setClose,setFound,found,hidden,setHidden,characters,setStart,finish,setFinish,setResult,setChoice,setCharacter} = useResultContext();
  useEffect(()=>{
    setHidden(false);
    window.addEventListener('mousemove',(e) => {
      document.querySelector('.cursor').style.left = `${e.clientX}px`;
      document.querySelector('.cursor').style.top = `${e.clientY}px`;
    })
  },[])
  useEffect(()=>{
    if(character === choice && choice !== ""){
      let current = document.querySelector(`[data-character='${character}']`);
      current?current.setAttribute('data-found',''):null;
      current?current.style.display = 'none':null;
      setResult('correct');
      setChoice('');
      setCharacter('');
      setFound((prev)=>[...prev,character]);
      console.log('found');
    }
    if(character !== choice && choice !== ""){
      setResult('false');
      setChoice('');
      console.log('false');
    }
    if(characters.length !== 0){
      if(document.querySelectorAll('[data-found]').length === characters.length){
        setStart(false);
        setFinish(true);
      }
    }
  },[choice])
  return (
    <div className={`${!hidden || finish?'overflow-x-hidden h-screen':'min-h-screen'} app`}>
      <img src={cursor} className='fixed z-10 cursor w-16 -translate-x-2/4 -translate-y-2/4 pointer-events-none' alt="" />
      <Header/>
      <Routes>
        <Route path='/' element={<Content/>} />
        <Route path='/leaderboard' element={<LeaderBoard/>} />
      </Routes>
      <Menu closed={close} setClosed={setClose} />
      <Start/>
      <Finish/>
    </div>
  )
}

export default App
