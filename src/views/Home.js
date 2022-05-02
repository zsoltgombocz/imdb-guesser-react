import {React, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import { GameContext } from '../states/GameContext';
import {startGame} from '../services/GameService';
import { UserContext } from '../states/UserContext';
 
const Home = () => {
  const [getGame,setGame] = useContext(GameContext);
  const [getUser,] = useContext(UserContext);

  const navigate = useNavigate();
  const navigateToGame = () => {
    const questions = startGame();
    setGame({...getGame, started: true});
    navigate('/game', {replace: true});
  }
  

  
  
  return (
    <div className={'animate__animated animate__bounceIn d-flex flex-fill justify-content-center align-items-center'}>
      <Button text="Let's start guessing!" classes={'border-white glass-btn'} onClick={navigateToGame}></Button>
    </div>
  )
}

export default Home