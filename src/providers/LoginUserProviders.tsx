import { useState, createContext, Dispatch, ReactNode, SetStateAction } from "react";

import { User } from "../types/api/User";

export type LoginUserContextType = {
    LoginUser: User | null
    setLoginUser: Dispatch<SetStateAction<User | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>(
    {} as LoginUserContextType
);

export const LoginUserProviders = (props: { children: ReactNode }) => {
    const { children } = props;
    const [LoginUser, setLoginUser] = useState<User | null>(null);
    return (
        <LoginUserContext.Provider value={{ LoginUser, setLoginUser }}>
            {children}
        </ LoginUserContext.Provider>
    )
}