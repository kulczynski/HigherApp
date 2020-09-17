import React, { createContext, useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';

export const CounterContext = createContext();

const CounterContextProvider = (props) => {

    const [counter, dispatch] = useReducer(counterReducer, null);

    return (
        <CounterContext.Provider value={{counter, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;