import React, { useReducer } from 'react';

import StateContext from '../constants/stateContext';
import stateReducer from '../functions/stateReducer';
import initialState from '../constants/initialState';

const StateContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);
    
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    );
};

export default StateContextProvider;