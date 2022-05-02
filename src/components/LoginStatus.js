import React, {useContext} from 'react'
import { UserContext } from '../states/UserContext';

const LoginStatus = ({className, innerHTML}) => {
  const [getUser,] = useContext(UserContext);

  return (
    <div className={className}>
    {(getUser.loggedIn) ?  (<><span>Logged in as: {(getUser.username)}</span> {innerHTML}</>) : <></>}
    </div>
  )
}

export default LoginStatus