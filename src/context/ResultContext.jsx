import { async } from '@firebase/util';
import { collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { db, images } from '../firebase';

const Result = createContext();
export const ResultContext = ({children}) => {
  const [choice,setChoice] = useState('');
  const [character,setCharacter] = useState('');
  const [close,setClose] = useState(true);
  const [imagesArr,setImagesArr] = useState([]);
  const [characters,setCharacters] = useState([]);
  const [found,setFound] = useState([]);
  const [hidden,setHidden] = useState(false);
  const [seconds,setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [start,setStart] = useState(false);
  const [finish,setFinish] = useState(false);
  const [players,setPlayers] = useState([]);
  const imageRef = ref(images,'/');
  const colRef = collection(db,'characters');
  const playersRef = collection(db,'players');
  const q = query(playersRef,orderBy('score','desc'))
  useEffect(()=>{
    listAll(imageRef).then((data) => {
        data.items.forEach((item)=>{
            getDownloadURL(item).then((img)=>{
                setImagesArr((prev)=>[...prev,img])
            })
        })
    });
    const getCharacters = async () => {
      const data = await getDocs(colRef);
      setCharacters(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    onSnapshot(q,(data) => {
      setPlayers(data.docs.map((doc)=>({...doc.data()})))
      console.log(players);
    })
    getCharacters();
  },[])
  return (
    <Result.Provider value={{choice,setChoice,character,setCharacter,imagesArr,setImagesArr,characters,setCharacters,close,setClose,found,setFound,hidden,setHidden,minutes,seconds,setMinutes,setSeconds,start,setStart,finish,setFinish,setPlayers,players}}>
        {children}
    </Result.Provider>
  )
}

export const useResultContext = () => useContext(Result);