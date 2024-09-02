import { createContext, useReducer } from "react";
import { AppReducer } from "../components/AppReducer";

const initialTrans = {
  transactions: [],
};

export const GlobalContext = createContext(initialTrans);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialTrans);

  const DeleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const AddTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transactions,
        DeleteTransaction,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
