import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';
import FullBodyImages from './components/FullBodyImages';
import UserService from './services/UserService';
import {useContext, useEffect} from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Alert from './components/Alert';
import Loader from './components/Loader';
import Game from './views/Game';
import { UserContext } from './states/UserContext';
import useUserStatus from './components/hooks/useUserStatus';

function App() {
  let routesWithBg = ['/', '/login', '/register', '/leaderboard', '/about'];
  const [,setUser] = useContext(UserContext);
  const location = useLocation();

  useUserStatus();
  
  useEffect(() => {
    const recoverUser = async () => {
      let username = await UserService.recoverUser();
      if(username) {
       setUser({loggedIn: true, username});
      }
    }

    recoverUser();
  }, [])

  return (  
      <div className={'d-flex h-max flex-column'}>
      <Alert />
      <Header />
      <Loader />

      <div className={'z-999 d-flex flex-grow-1 flex-fill'}>
      <Routes>
          <Route path='/' exact element={<Home />}></Route>

          <Route path='/login' element={
            <ProtectedRoute rule={{loggedIn: false}} element={LoginView} />
          }></Route>
          <Route path='/register' element={
            <ProtectedRoute rule={{loggedIn: false}} element={RegisterView} />
          }></Route>
          <Route path={'/game'} element={<Game />}></Route>
      </Routes>
      </div>

      <div className={'full-cover z-1'}>
      {(routesWithBg.includes(location.pathname)) ? (<FullBodyImages />) : null}
      </div>

      
      
      <Footer />
      </div>
  );
}

export default App;
