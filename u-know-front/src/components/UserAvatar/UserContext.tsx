import React, { createContext, useState, useContext } from 'react';

//LLAMADAS AL BACKEND DE NOMBRE Y WALLET_BALANCE


interface UserContextType {
    name: string;
    setUsername: (name: string) => void;
    setUserNameAfterLogin: (name: string) => void;
}

const UserContext = createContext<UserContextType>({
    name: '',
    setUsername: () => { },
    setUserNameAfterLogin: () => { },
});

export function useUserContext() {
    return useContext(UserContext);
}
 
interface WalletContextType {
    wallet_balance: number,
    setUserWallet: (wallet_balance: number) => void;
    setUserWalletAfterLogin: (wallet_balance: number) => void;
}

const WalletContext = createContext<WalletContextType>({
    wallet_balance: 0,
    setUserWallet: () => { },
    setUserWalletAfterLogin: () => { },
});

export function useWalletContext() {
    return useContext(WalletContext );
}





export function UserProvider({ children }: { children: React.ReactNode }) {
    const [name, setUsername] = useState('');
    const [wallet_balance, setUserWallet] = useState(0); 

    const setUserNameAfterLogin = (name: string) => {
        setUsername(name);
    };
    const setUserWalletAfterLogin = (wallet_balance: number) =>{
        setUserWallet(wallet_balance);
    }

    return (
        <UserContext.Provider
      value={{ name, setUsername, setUserNameAfterLogin }}
    >
      <WalletContext.Provider
        value={{ wallet_balance, setUserWallet, setUserWalletAfterLogin }}
      >
        {children}
      </WalletContext.Provider>
    </UserContext.Provider>
    );
}


