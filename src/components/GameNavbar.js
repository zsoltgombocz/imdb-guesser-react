import React, { useContext } from 'react'
import LoginStatus from './LoginStatus'
import { GameContext } from '../states/GameContext'


const GameNavbar = () => {
  const [getGame,] = useContext(GameContext);
    
  return (
    <nav className="z-998 animate__animated animate__slideInDown p-3">
        <div className={'full-cover navbar-glass z-1'}></div>

        <div className={'d-flex container-fluid container-lg justify-content-lg-between justify-content-center flex-row align-items-center flex-grow-1 flex-fill'}>
        <div className={'nav-item z-999 f-400'}>vissa</div>
        <div><LoginStatus className={'nav-item f-300 z-999 d-none d-md-block'}/> <div className={'f-400 z-999 nav-item'}>{getGame.secondsLeft}</div></div>
        <div className={'nav-item f-400 z-999'}>kerdes/kerdes</div>
        </div>
    </nav>
  )
}

export default GameNavbar