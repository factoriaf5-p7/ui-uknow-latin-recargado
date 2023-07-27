import React, { createContext, useState, useContext } from 'react';

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
///////////////////////////////////////////

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

    const setUserNameAfterLogin = (name: string) => {
        setUsername(name);
    };

    return (
        <UserContext.Provider value={{ name, setUsername, setUserNameAfterLogin }}>
            {children}
        </UserContext.Provider>
    );
}
