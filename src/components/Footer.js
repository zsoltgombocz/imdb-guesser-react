import { React, useState } from 'react'

const Footer = () => {
  const [screen, setScreen] = useState(window.innerWidth);

  window.addEventListener('resize', () => setScreen(window.innerWidth));

  return (
    <footer className={`bg-white text-center tricky-bg ${(screen < 490) ? 'animate__animated animate__slideOutDown' : 'animate__animated animate__slideInUp'}`}>
        <div className={'container d-flex flex-column justify-content-center'}>
            <span className={'mt-2 mb-2 headline'}>How does the game work?</span>
            <p className={'mb-2'}>
            You have got 15 seconds to guess from two poster which got the highest score on IMDb. After 10 question your score will be saved and can be viewed in the leaderboard.
            </p>
        </div>
    </footer>
  )
}

export default Footer