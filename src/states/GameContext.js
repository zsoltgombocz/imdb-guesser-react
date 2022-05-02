import {useState, createContext, useEffect} from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [getGame, setGame] = useState(() => {
        const defaultState = {
            started: false,
            current_q: 1,
            timeLeft: 15,
            questions_state: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], //10 questions, correct(1) or incorrect(0) answer, -1 default
            halt: false, //breaks between questions, will appear a next button  
        };

        const localData = localStorage.getItem('game');

        return localData ? JSON.parse(localData) : defaultState
    });

    useEffect(() => {
        localStorage.setItem('game', JSON.stringify(getGame))
    }, [getGame])

    return (
        <GameContext.Provider value={[getGame, setGame]}>
            {props.children}
        </GameContext.Provider>
    );
}