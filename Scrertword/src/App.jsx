//useState
import { useState,useCallback,useEffect } from 'react'
//css
import './App.css'
//data
import { wordlist } from './data/words'

import Startscreen from './components/Startscreen'
import Gameover from './components/Gameover'
import Game from './components/Game'


const stages =[
    {id:1, name:"Start"},
    {id:2, name:"Game"},
    {id:3, name:"End"}
]

function App() {

  const [gamestage,setgamestage] = useState(stages[0].name)
  const [words] = useState(wordlist)
  const [pickedWord,setpickedWord] = useState("")
  const [pickedCategory,setpickedCategory] = useState("")
  const [letters,setletters] =useState([])


const pickedAndCategoria = () =>{
  // pick a redom categori
    const catrgories = Object.keys(words);
    const category = 
    catrgories[Math.floor(Math.random() * Object.keys(catrgories).length)];


    console.log(category);

    //rendom palavras
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word);
    return { word,category};
}


  //start pages
  const startGame = ()=>{
      const {word,category} = pickedAndCategoria();
      console.log(word,category);

    //array de letras
    let wordlettrs = word.split("");

    wordlettrs = wordlettrs.map(() => toLowerCase());
    console.log(word,category);
    console.log(wordlettrs);

    // filter states
    setletters(letters);
    setpickedCategory(category);
    setpickedWord(word); 


    setgamestage(stages[1].name)
  }

  //process the latter input
  const verifyletter = () =>{
    setgamestage(stages[2].name)
  }

  //reniciar jogo

  const retry = () =>{
    setgamestage(stages[0].name)
  }

  return (
    <>
     {gamestage === "Start" && <Startscreen startGame={startGame}/>}
     {gamestage === "Game" && <Game verifyletter={verifyletter}/>}
     {gamestage === "End" && <Gameover retry={retry}/>}
    </>
  )
}

export default App
