import { createContext, useState, ReactNode, useContext  } from "react";

type UserContextProps = {
    children: ReactNode,
}

type UserContextType = {
    openTransaction: boolean,
    setOpenTransaction: (newState: boolean) => void,
}

const initialValue = {
    setOpenTransaction: () => {},
    openTransaction: false,
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children}: UserContextProps ) => {
    const [ openTransaction, setOpenTransaction ] = useState(initialValue.openTransaction)
    return (
        <UserContext.Provider value={{openTransaction, setOpenTransaction}}>
            {children}
        </UserContext.Provider>
    )
}

export function useAddContext() {
    const context = useContext(UserContext);
    const { openTransaction, setOpenTransaction } = context;
    return { openTransaction, setOpenTransaction };
  }
