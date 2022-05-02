import {React, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../states/GameContext';

const Game = () => {
  const navigate = useNavigate();
  const [getGame, setGame] = useContext(GameContext);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
      if(getGame.started === false) {
        navigate('/', {replace: true});
      }else{
        console.log('jatek megkezdve')
        setTimeLeft(getGame.timeLeft);
      }
  }, [])


 /* useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    saveGame({
      ...gameState,
      secondsLeft: timeLeft
    });

    return () => clearInterval(timer);
  }, [timeLeft])*/
  
  const stop = () => {
    setTimeLeft(null)
  }
  
  return (
    <div onClick={() => stop}>Game</div>
  )
}

export default Game