import React from 'react'
import {NavLink} from 'react-router-dom';

const CustomLink = ({innerHTML, hide, fake, ...props}) => {
  props['className'] += `${(hide) ? ' hide' : ''}`;
  return (
    (!fake) ? (<NavLink {...props}>{innerHTML}</NavLink>) : (<a {...props}>{innerHTML}</a>)  
  )
}

export default CustomLink