import React, { useContext } from 'react'
import { LoaderContext } from '../states/LoaderContext';

const Loader = () => {
    const [getLoader,] = useContext(LoaderContext);

  return (
      (getLoader) ? 
      <div className={'z-1000 navbar-glass full-cover d-flex '}>
          <div className={'d-flex flex-fill bg-blur justify-content-center align-items-center'}>
          <svg className={'col-6 col-md-3'} version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
                <path fill="#141414" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform 
                    attributeName="transform" 
                    attributeType="XML" 
                    type="rotate"
                    dur="1s" 
                    from="0 50 50"
                    to="360 50 50" 
                    repeatCount="indefinite" />
                </path>
            </svg>
          </div>
      </div>
      :
      (<></>)
  )
}

export default Loader