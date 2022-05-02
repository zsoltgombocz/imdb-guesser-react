import React, {useContext} from 'react'
import {useLocation} from 'react-router-dom';
import { UserContext } from '../states/UserContext';
import GameNavbar from './GameNavbar';
import Navbar from './Navbar';

const Header = () => {
    const [getUser,] = useContext(UserContext);
    let location = useLocation();
    const isGame = location.pathname === '/game';
    
    return (
        isGame ?
        <GameNavbar />
        : 
        <Navbar state={getUser} />
    )
}

export default Header