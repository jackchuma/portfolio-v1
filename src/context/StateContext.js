import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [active, setActive] = useState('home');

    return (
        <Context.Provider value={{
            active,
            setActive
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);