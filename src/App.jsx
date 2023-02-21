import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Content from './componenets/Content'
import Finish from './componenets/Finish';
import Header from './componenets/Header'
import LeaderBoard from './componenets/LeaderBoard';
import Menu from './componenets/Menu'
import Start from './componenets/Start';
import { useResultContext } from './context/ResultContext';

function App() {
  const {choice,character,close,setClose,setFound,found,hidden,setHidden,characters,setStart,finish,setFinish} = useResultContext();
  useEffect(()=>{
    setHidden(false);
  },[])
  useEffect(()=>{
    if(character === choice){
      let current = document.querySelector(`[data-character='${character}']`);
      current?current.setAttribute('data-found',''):null;
      current?current.style.display = 'none':null;
      setFound((prev)=>[...prev,character]);
    }
    if(characters.length !== 0){
      if(document.querySelectorAll('[data-found]').length === characters.length){
        setStart(false);
        setFinish(true);
      }
    }
  },[choice])
  return (
    <div className={`${!hidden || finish?'overflow-x-hidden h-screen':'min-h-screen'}`}>
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
