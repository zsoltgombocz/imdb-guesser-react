import './App.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import FullBodyImages from './components/FullBodyImages';
import UserService from './services/UserService';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './store/actions';
import ProtectedRoute from './components/ProtectedRoute';
import Alert from './components/Alert';
import Loader from './components/Loader';

function App() {
  let routesWithBg = ['/', '/login', '/register', '/leaderboard', '/about'];
  const location = useLocation();

  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const {loginUser} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const recoverUser = async () => {
      let username = await UserService.recoverUser();
      if(username) {
        loginUser({username});
      }
    }

    recoverUser();
  }, [])
  

  return (  
      <div className={'d-flex h-max flex-column'}>
      <Alert />
      <Navbar />
      <Loader />

      <div className={'z-999 d-flex flex-grow-1 flex-fill'}>
      <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route rule={{login: true}} path='/login' element={
            <ProtectedRoute rule={{loggedIn: false}} element={LoginView} />
          }></Route>
          <Route rule={{login: true}} path='/register' element={
            <ProtectedRoute rule={{loggedIn: false}} element={RegisterView} />
          }></Route>
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
