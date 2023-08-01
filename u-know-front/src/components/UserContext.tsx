/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';

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
    const [name, setUsername] = useState(() => {
        // Intentamos obtener el nombre del localStorage, si no existe, devuelve una cadena vacía.
        return localStorage.getItem('username') || '';
    });
    const [wallet_balance, setUserWallet] = useState(() => {
        // Intentamos obtener el saldo de la cartera del localStorage, si no existe, devuelve 0.
        const storedBalance = localStorage.getItem('wallet_balance');
        return storedBalance ? parseFloat(storedBalance) : 0;
    });

    const setUserNameAfterLogin = (name: string) => {
        setUsername(name);
    };
    const setUserWalletAfterLogin = (wallet_balance: number) =>{
        setUserWallet(wallet_balance);
    }; 
    
    // Guardar los datos en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem('username', name);
    }, [name]);
    useEffect(() => {
        localStorage.setItem('wallet_balance', wallet_balance.toString());
    }, [wallet_balance]);

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


