import React, { useContext, useEffect } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { UserContext } from '../states/UserContext';


const ProtectedRoute = ({rule, element: Element,...props}) => {
    const defKeys = ['loggedIn'];
    const [getUser,] = useContext(UserContext);
    const checkRules = () => {
        let re = false;
        defKeys.forEach(e => {
            switch(e) {
                case 'loggedIn':
                    re = rule[e] === getUser.loggedIn;
            }
        });

        return re;
    }
  return (
    checkRules() ? <Element /> : <Navigate replace={true} to='/' />
  )
}

export default ProtectedRoute