import React, { useContext } from 'react'
import CustomLink from './CustomLink';
import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import LoginStatus from './LoginStatus';
import { UserContext } from '../states/UserContext';
import { clearCookies } from '../services/UserService';

const Navbar = () => {
    const navigate = useNavigate();
    const [getUser,setUser] = useContext(UserContext);
    const location = useLocation();
    const logout = () => {
        console.log(clearCookies())
        //cookies.removeItem('auth');
        //setUser({loggedIn: false, username: ''});
        //navigate('/', { replace: true });

    }

    const homeLink = () => 
        (location.pathname === '/') ? (null) : (
        <NavLink to="/" className={'nav-link'}>
            <li className="nav-item">
                Home
            </li>
        </NavLink>
        );
    const logoutLink = () => (
        <CustomLink fake={true} hide={(!getUser.loggedIn)} onClick={()=>logout()} className={'nav-link'} innerHTML={
            <li className="nav-item">
                Logout
            </li>
        }/>
    );
  return (
    <nav className="z-998 animate__animated animate__slideInDown p-3">
        <div className={'full-cover navbar-glass z-1'}></div>

        <div className={'d-flex container-fluid container-lg justify-content-lg-between justify-content-center flex-row align-items-center flex-grow-1 flex-fill'}>
        <ul className="nav z-998 order-2 flex-row justify-content-evenly">

            <LoginStatus className={'f-300 d-flex flex-grow-1 flex-fill w-100 justify-content-center align-items-center d-md-none'} />
            <CustomLink hide={(getUser.loggedIn)} to="/login" className={'nav-link'} innerHTML={
                <li className="nav-item">
                    Login
                </li>
            }/>
            <CustomLink hide={(getUser.loggedIn)} to="/register" className={'nav-link'} innerHTML={
                <li className="nav-item">
                    Register
                </li>
            }/>


        <NavLink to="/leaderboard" className={'nav-link'}>
        <li className="nav-item">
            Leaderboard
        </li>
        </NavLink>
        <NavLink to="/about" className={'nav-link'}>
        <li className="nav-item">
            About
        </li>
        </NavLink>
        {
            homeLink()
        }
        
        <div>{logoutLink()}</div>
        
        </ul>
        <LoginStatus className={'nav-item f-300 z-999 d-none d-md-block'}/>
        </div>
    </nav>
  )
}

export default Navbar;
