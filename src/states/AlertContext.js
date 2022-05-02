import {useState, createContext} from 'react';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
    const [getAlert, setAlert] = useState({
        show: false,
        type: -1,
        message: ''
    });

    return (
        <AlertContext.Provider value={[getAlert, setAlert]}>
            {props.children}
        </AlertContext.Provider>
    );
}