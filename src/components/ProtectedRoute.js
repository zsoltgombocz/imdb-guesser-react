import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'


const ProtectedRoute = ({rule, element: Element,...props}) => {
    const defKeys = ['loggedIn'];
    const userState = useSelector((state) => state.user);
    const checkRules = () => {
        let re = false;
        defKeys.forEach(e => {
            switch(e) {
                case 'loggedIn':
                    re = rule[e] === userState.loggedIn;
            }
        });

        return re;
    }
  return (
    checkRules() ? <Element /> : <Navigate to='/' />
  )
}

export default ProtectedRoute