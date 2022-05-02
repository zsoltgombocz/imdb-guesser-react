import { useState, useEffect, useContext } from 'react';
import { isLoggedIn } from '../../services/UserService';
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../states/UserContext';
import API from '../../services/API';

function useUserStatus() {
  const [getStatus, setStatus] = useState(null);
  const navigate = useNavigate();
  const [,setUser] = useContext(UserContext);

  useEffect(() => {
      console.log('meghivva')
    const status = async () => {
      return new Promise(async (resolve, reject) => {
        const status = await isLoggedIn();
        resolve(status);
      });
    }

    status().then(res => {
        if(!res) {
            setUser({loggedIn: false, username: ''});
            API.setToken('');
        }
    });

  }, [navigate])
}

export default useUserStatus;