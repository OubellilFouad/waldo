import React, { useEffect,useState } from 'react'
import { useResultContext } from '../context/ResultContext'

const Menu = ({closed}) => {
  const {setChoice,characters,setClose,result,character,setStyle} = useResultContext();
  const handleMenuClick = (e) => {
    setChoice(e.target.textContent);
    let timeout = setTimeout(() => {
      setStyle('hidden');
    },4000)
    setClose(true)
    return () => clearTimeout(timeout);
  }
  useEffect(()=>{
    if(result === 'correct'){
      setStyle('bg-green-400 block');
    }
    if(result === 'false'){
      setStyle('bg-red-400 block');
    } 
  },[result])
  return (
    <div className={`menu w-40 h-44 bg-white rounded-lg absolute grid-rows-3 ${closed?'hidden':'grid'} overflow-hidden`}>
        {characters.map((character)=>{
          const {name,id} = character;
          return(
            <span onClick={(e)=>handleMenuClick(e)} key={id} data-menu className={`flex justify-center items-center last-of-type:border-none border-b hover:bg-slate-300 menu-${name}`}>{name}</span>
          )
        })}
    </div>
  )
}

export default Menu