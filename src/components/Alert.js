import React, { useContext } from 'react'
import { AlertContext } from '../states/AlertContext';

const Alert = () => {
    const [getAlert,setAlert] = useContext(AlertContext);

    const type = (num) => {
        switch(num) {
            case 1:
                return 'success';
            case 2: 
                return 'danger';
            case 3:
                return 'warning';
            default: return 'dark'
        }
    }

    const closeAlert = () => {
        setAlert({});
    }

  return (
      <div className={'mt-3 d-flex container-fluid w-100 custom-alert justify-content-center'}>
        <div className={`col-12 col-md-6 alert alert-${type(getAlert.type)} alert-dismissible fade ${getAlert.show ? 'show z-999' : ''}`} role="alert">
            {getAlert.message}
            <button type="button" className="btn-close" onClick={() => closeAlert()} aria-label="Close"></button>
        </div>
      </div>
  )
}

export default Alert