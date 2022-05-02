import {useState, createContext} from 'react'

export const LoaderContext = createContext()

export const LoaderProvider = (props) => {
    const [getLoader, setLoader] = useState(false);

    return (
        <LoaderContext.Provider value={[getLoader, setLoader]}>
            {props.children}
        </LoaderContext.Provider>
    )
}