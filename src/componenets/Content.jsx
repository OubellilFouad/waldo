import React, { useEffect } from 'react'
import charactersImg from '../assets/characters.png'
import { useResultContext } from '../context/ResultContext'

const Content = () => {
  const {setCharacter,characters,close,setClose} = useResultContext();
  const content = document.querySelector('.content');
  const menu = document.querySelector('.menu');
  const handleClick = (e) => {
    setClose(!close)
    let y = content.getBoundingClientRect().top;
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${(e.clientY + -y) + 120}px`; 
  }
  useEffect(()=>{
    characters.map((character)=>{
      const {name,x,y} = character;
      document.querySelector(`.${name}`).style.left = `${x}px`;
      document.querySelector(`.${name}`).style.top = `${y}px`;
    })
  })
  return (
    <div onClick={(e)=>handleClick(e)} className="relative content">
        <img src={charactersImg} className='w-full' alt="" />
        {characters.map((character)=>{
          const {img,id,name} = character;
          return(
            <img onClick={(e)=>setCharacter(e.target.dataset.character)} data-character={name} src={img}  className={`w-7 absolute top-0 ${name}`} key={id}/>
          )
        })}
    </div>
  )
}

export default Content