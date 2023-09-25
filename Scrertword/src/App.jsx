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

  //start pages
  const startGame = ()=>{
    setgamestage(stages[1].name)
  }

  //process the latter input
  const verifyletter = () =>{
    setgamestage(stages[2].name)
  }

  return (
    <>
     {gamestage === "Start" && <Startscreen startGame={startGame}/>}
     {gamestage === "Game" && <Game verifyletter={verifyletter}/>}
     {gamestage === "End" && <Gameover/>}
    </>
  )
}

export default App
