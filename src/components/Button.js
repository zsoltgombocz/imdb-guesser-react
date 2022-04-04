import React from 'react'

const Button = ({text, style, icon, classes, onClick, disabled}) => {
  return (
    <button disabled={disabled} type='button' className={'btn custom-btn z-999 ' + classes} style={style} onClick={onClick}>{text}{icon}</button>
  )
}

export default Button