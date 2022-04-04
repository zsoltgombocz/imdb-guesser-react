import {React, useEffect} from 'react'
import Button from '../components/Button'
import * as state from '../store/stateImports';
const Home = () => {
    const dispatch = state.useDispatch();

  return (
    <div className={'animate__animated animate__bounceIn d-flex flex-fill justify-content-center align-items-center'}>
      <Button text="Let's start guessing!" classes={'border-white glass-btn'}></Button>
    </div>
  )
}

export default Home