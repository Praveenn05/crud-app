import React, { createContext, useReducer } from "react";
import reducer, { initialState } from './AppReducer';

export const GlobalContext = createContext(initialState); //to use in child component

export const GlobalProvider = ({ children }) => {
    const [userValue, dispatch] = useReducer(reducer, initialState);

    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }



    return (
        <GlobalContext.Provider value={{
            users: userValue.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}