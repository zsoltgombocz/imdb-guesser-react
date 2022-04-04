import React from 'react'
import {NavLink, useNavigate, useLocation} from 'react-router-dom';
import {useSelector, useDispatch, actionCreators, bindActionCreators} from '../store/stateImports';
import CustomLink from './CustomLink';

const Navbar = () => {
    const navigate = useNavigate();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {logoutUser} = bindActionCreators(actionCreators, dispatch);
    const logout = () => {
        logoutUser();
        navigate('/', { replace: true });

    }

    let location = useLocation();
    const homeLink = () => 
        (location.pathname === '/') ? (null) : (
        <NavLink to="/" className={'nav-link'}>
            <li className="nav-item">
                Home
            </li>
        </NavLink>
        );
    const logoutLink = () => (
        <CustomLink fake={true} hide={(!state.user.loggedIn)} onClick={()=>logout()} className={'nav-link'} innerHTML={
            <li className="nav-item">
                Logout
            </li>
        }/>
    );
    return (
    <nav className="z-998 animate__animated animate__slideInDown p-3">
        <div className={'full-cover navbar-glass z-1'}></div>

        <div className={'d-flex container-fluid container-lg justify-content-lg-between justify-content-center flex-row align-items-center'}>
        <ul className="nav z-998 order-2">
        
        <CustomLink hide={(state.user.loggedIn)} to="/login" className={'nav-link'} innerHTML={
            <li className="nav-item">
                Login
            </li>
        }/>
        <CustomLink hide={(state.user.loggedIn)} to="/register" className={'nav-link'} innerHTML={
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
        {
            logoutLink()
        }
        </ul>
        <div className="order-1 nav-item f-300 z-999 d-flex flex-column">
            {(state.user.loggedIn) ? <span>Logged in as: {(state.user.username)}</span> : <></>}
        </div>
        </div>
    </nav>
  )
}

export default Navbar