import React from 'react'
import {useSelector, useDispatch, actionCreators, bindActionCreators} from '../store/stateImports';

const Alert = () => {
    const alertState = useSelector((state) => state.alert);
    const dispatch = useDispatch();
    const {closeAlert} = bindActionCreators(actionCreators, dispatch);

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

  return (
      <div className={'mt-3 d-flex container-fluid w-100 custom-alert justify-content-center'}>
        <div className={`col-12 col-md-6 alert alert-${type(alertState.type)} alert-dismissible fade ${alertState.show ? 'show z-999' : ''}`} role="alert">
            {alertState.message}
            <button type="button" className="btn-close" onClick={() => closeAlert()} aria-label="Close"></button>
        </div>
      </div>
  )
}

export default Alert