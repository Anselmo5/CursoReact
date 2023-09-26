import React, { useState,useRef } from 'react'
import './Game.css'
const Game = ({ verifyletter,pickedCategory,pickedWord,letters,guessedLetters,wrongLetters,guesses,score}) => {
  
const [letter,setLetter] = useState("")
const letterinputref = useRef(null)

const handleSibmit = (e) =>{
  e.preventDefault();

  verifyletter(letter)
  setLetter("")
  letterinputref.current.focus();
}

  return (
    <div className='App'>
        <div className="game">
          <p className="points">
            <span>Pontualação: {score} </span>
          </p>
          <h2>Advinhe a palavra:</h2>
          <h3 className="tip">
            Dica sobre a Palavra: <span>{pickedCategory}</span>
          </h3>
          <p>Você ainda tem {guesses} tentativas(s).</p>
          <div className="wordContainer">
              {letters.map ((letters, i)=>(
                guessedLetters.includes(letters) ? (
                  <span key={i} className='blankSquare'></span>
                ) : (
                  <span key={i} className='blankSquare'> </span>
                )
              ))}
          </div>

          <div className="letterContainer">
            <p>Tente adivnhar uma letra da palavra:</p>
            <form onSubmit={handleSibmit}>
              <input 
                type="text" 
                name='latter' 
                maxLength="1" 
                required 
                 onChange={(e) => setLetter(e.target.value)}
                 value={letter}
                 ref={letterinputref}
                />
                      <button>Jogar</button>
            </form>
          </div>

          <div className="wronlettercontainer">
            <p>Letras já utilizadas</p>
                  {wrongLetters.map((letters,i) =>(
                    <span key={i}> {letters}</span>
                  ))}
          </div>
        </div>
    </div>
  )
}

export default Game