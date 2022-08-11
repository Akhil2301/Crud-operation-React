import React, { createContext, useReducer } from "react";
import AddReducer from "./AppReducer";

//Intial
const initialState = {
  users: [
    // { id: 1, name: "user one" },
    // { id: 2, name: "user Two" },
    // { id: 3, name: "user Three" },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddReducer, initialState);

  //Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const completeUser = (user) => {
    dispatch({
      type: "COMPLETE_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
        completeUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
