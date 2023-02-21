import React, { useEffect,useState } from 'react'
import { useResultContext } from '../context/ResultContext'

const Menu = ({closed}) => {
  const {setChoice,characters,setClose,found,setFinish} = useResultContext();
  const [over,setOver] = useState(false);
  const handleMenuClick = (e) => {
    setChoice(e.target.textContent);
    setClose(true)
    // setOver(characters.every((character)=>{
    //   const {name} = character;
    //   if(found.includes(name)){
    //     return true
    //   }else{
    //     return false
    //   }
    // }))
    // console.log(over)
    // if(over){
    //   setStart(false);
    //   // setFinish(true);
    // }
  }
  return (
    <div className={`menu w-40 h-44 bg-white rounded-lg absolute grid-rows-3 ${closed?'hidden':'grid'} overflow-hidden`}>
        {characters.map((character)=>{
          const {name,id} = character;
          return(
            <span onClick={(e)=>handleMenuClick(e)} key={id} data-menu className='flex justify-center items-center last-of-type:border-none border-b hover:bg-slate-300 cursor-pointer'>{name}</span>
          )
        })}
    </div>
  )
}

export default Menu