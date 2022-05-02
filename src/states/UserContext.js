import {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [getUser, setUser] = useState({
        loggedIn: false,
        username: ''
    });

    return (
        <UserContext.Provider value={[getUser, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}