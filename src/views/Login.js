import { React, useContext, useState } from 'react'
import Button from '../components/Button';
import UserService from '../services/UserService';
import { useNavigate } from "react-router-dom";
import CustomInput from '../components/CustomInput';
import { usernameRule, passwordRuleLogin } from './formValidationRules/Common';
import { LoaderContext } from '../states/LoaderContext';
import { UserContext } from '../states/UserContext';
import { AlertContext } from '../states/AlertContext';

const Login = () => {
  const [,setLoader] = useContext(LoaderContext);
  const [,setUser] = useContext(UserContext);
  const [,setAlert] = useContext(AlertContext);

  const navigate = useNavigate();

  const usernameValidationRules = usernameRule;
  const passwordValidationRules = passwordRuleLogin;
  const initialState = {
    value: '',
    validation: {
        messages: {},
        valid: false,
    }
  }

  const [_username, _setUsername] = useState({
    ...JSON.parse(JSON.stringify(initialState)),
    rules: usernameValidationRules
    
  });
  const [_password, _setPassword] = useState({
    ...JSON.parse(JSON.stringify(initialState)),
    rules: passwordValidationRules
    
  });

  const [_generalError, _setGeneralError] = useState({
    message: '',
    show: false
  });
  
  const handleLogin = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(checkValidation) {
      setLoader(true);
      try{
        let response = await UserService.Login(_username.value, _password.value);
        setUser({loggedIn: true, username: _username.value});
        navigate('/', { replace: true });
        console.log(response);
        setAlert({message: response.data.message, type: 1, show: true});
      }catch(error) {
        setAlert({message: error.message || error.statusText, type: 2, show: true});
        const errors = error?.data?.error?.errors || false;
        if(errors) {
          setErrorsFromServer(errors)
        }
      }
      setLoader(false); 
    }
  }

  const setErrorsFromServer = (errors) => {
    const errorKeys = Object.keys(errors);
    if(errorKeys.length > 0) {
      errorKeys.forEach((e) => {
        switch(e) {
          case 'general':
            _setGeneralError({
              message: errors[e],
              show: true
            });
            break;
          case 'username':
            _setUsername({..._username, validation: {
              messages: {
                server: errors[e],
              },
              valid: false
            }});
            break;
          case 'password':
            let state = {..._password, validation: {
              messages: {
                server: errors[e],
              },
              valid: false
            }};
            _setPassword(state);
            break;
        }
      });
    }
  }

  const checkValidation = _username.validation.valid && _password.validation.valid;

  const iconSVG = (<svg className={'black-to-white'} width='38' height='38' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M15.273 45.0382L15.6006 44.6605L15.273 45.0382ZM38.5986 42.4026L38.5279 41.9076L38.5986 42.4026ZM43.0164 41.0304L43.3941 41.358L43.0164 41.0304ZM43.0164 8.96961L42.6387 9.29721L43.0164 8.96961ZM19.1491 4.8189L19.2198 4.32393L19.1491 4.8189ZM19.0783 5.31388L38.5279 8.09238L38.6693 7.10243L19.2198 4.32393L19.0783 5.31388ZM43.25 13.5371V36.4629H44.25V13.5371H43.25ZM38.5279 41.9076L19.0784 44.6861L19.2198 45.6761L38.6693 42.8976L38.5279 41.9076ZM15.0834 14.8582V8.7787H14.0834V14.8582H15.0834ZM15.0834 41.2213V35.5541H14.0834V41.2213H15.0834ZM19.0784 44.6861C18.0012 44.84 17.2459 44.9467 16.6721 44.9477C16.1125 44.9487 15.8158 44.8472 15.6006 44.6605L14.9454 45.416C15.4197 45.8274 15.999 45.949 16.6739 45.9477C17.3347 45.9466 18.1726 45.8257 19.2198 45.6761L19.0784 44.6861ZM14.0834 41.2213C14.0834 42.2791 14.0822 43.1257 14.1745 43.78C14.2687 44.4483 14.471 45.0045 14.9454 45.416L15.6006 44.6605C15.3853 44.4738 15.2428 44.1945 15.1647 43.6404C15.0846 43.0722 15.0834 42.3094 15.0834 41.2213H14.0834ZM43.25 36.4629C43.25 37.7165 43.2491 38.6097 43.1623 39.2972C43.0772 39.9706 42.9161 40.3829 42.6387 40.7028L43.3941 41.358C43.8504 40.8319 44.0561 40.201 44.1544 39.4225C44.251 38.6579 44.25 37.6904 44.25 36.4629H43.25ZM38.6693 42.8976C39.8844 42.724 40.8424 42.5881 41.5856 42.3843C42.3424 42.1769 42.9379 41.884 43.3941 41.358L42.6387 40.7028C42.3613 41.0226 41.9759 41.2405 41.3212 41.4199C40.653 41.6031 39.7688 41.7303 38.5279 41.9076L38.6693 42.8976ZM38.5279 8.09238C39.7688 8.26966 40.653 8.39691 41.3212 8.58009C41.9759 8.75954 42.3613 8.97736 42.6387 9.29721L43.3941 8.64201C42.9379 8.11597 42.3424 7.82313 41.5856 7.61567C40.8424 7.41193 39.8844 7.27603 38.6693 7.10243L38.5279 8.09238ZM44.25 13.5371C44.25 12.3096 44.251 11.3421 44.1544 10.5775C44.0561 9.79895 43.8504 9.16805 43.3941 8.64201L42.6387 9.29721C42.9161 9.61706 43.0772 10.0294 43.1623 10.7028C43.2491 11.3903 43.25 12.2835 43.25 13.5371H44.25ZM19.2198 4.32393C18.1726 4.17433 17.3347 4.05344 16.6739 4.05226C15.999 4.05104 15.4197 4.17264 14.9454 4.58405L15.6006 5.3395C15.8158 5.15283 16.1125 5.05125 16.6721 5.05225C17.2459 5.05328 18.0012 5.16 19.0783 5.31388L19.2198 4.32393ZM15.0834 8.7787C15.0834 7.69063 15.0846 6.92778 15.1647 6.35963C15.2428 5.80548 15.3853 5.52618 15.6006 5.3395L14.9454 4.58405C14.471 4.99546 14.2687 5.55167 14.1745 6.21999C14.0822 6.8743 14.0834 7.72088 14.0834 8.7787H15.0834Z'/>
  <path d='M33.3334 25L33.7238 24.6877L33.9737 25L33.7238 25.3123L33.3334 25ZM8.33337 25.5C8.05723 25.5 7.83337 25.2761 7.83337 25C7.83337 24.7239 8.05723 24.5 8.33337 24.5V25.5ZM25.3905 14.271L33.7238 24.6877L32.9429 25.3123L24.6096 14.8957L25.3905 14.271ZM33.7238 25.3123L25.3905 35.729L24.6096 35.1043L32.9429 24.6877L33.7238 25.3123ZM33.3334 25.5H8.33337V24.5H33.3334V25.5Z'/>
  </svg>);
  const loginButtonStyle = {
    padding: '5px 25px 5px 25px',
    border: '1px solid black',
    fontSize: '1.5rem'
  };

  return (
    <div className={'animate__animated animate__slideInLeft container d-flex flex-fill flex-grow-1 justify-content-center justify-content-lg-start align-items-center'}>
      <div className='col-12 col-md-8 col-lg-5 col-xl-4 bg-white panel'>
        <div className={'panel-header headline'}>
          <span>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="black" strokeLinecap='round'/>
          <circle cx="12" cy="8" r="4" stroke="black" strokeLinecap='round' />
          </svg>
            Login
          </span>
        </div>
        <div className={'panel-body mt-5'}>
          <form>
          <small className={`text-danger ${(_generalError.show === true) ? '' : 'hidden'}`}>
            {
                _generalError.message
            }
          </small>
          <div className={'col-12 mb-4'}>
          <CustomInput placeholder={'username...'} state={_username} setState={_setUsername} />
          </div>
          <div className={'col-12 mb-4'}>
          <CustomInput type={'password'} placeholder={'password...'} state={_password} setState={_setPassword} />
          </div>
          <div className={'panel-footer d-flex justify-content-end'}>
          <Button disabled={(checkValidation) ? '' : 'disabled'} text={'Login'} icon={iconSVG} style={loginButtonStyle} classes={'solid-btn'} onClick={handleLogin}/>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;