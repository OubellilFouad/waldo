import React, { useEffect } from 'react'
import charactersImg from '../assets/characters.png'
import { useResultContext } from '../context/ResultContext'

const Content = () => {
  const {setCharacter,characters,close,setClose,style} = useResultContext();
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
  useEffect(() => {
    window.addEventListener('scroll',(e) => {
      document.querySelector('.message').style.top = `${50}px`;
    })
  },[])
  return (
    <div onClick={(e)=>handleClick(e)} className="relative content flex items-center flex-col bg-no-repeat">
        <img src={charactersImg} className='w-full' alt="" />
        <div className={`py-4 px-20 ${style} text-white fixed z-10 message rounded-lg`}>hi</div>
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