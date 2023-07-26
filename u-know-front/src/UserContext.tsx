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
