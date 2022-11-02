import { createContext, ReactNode } from 'react';

export interface UserProps {
  name: string;
  avatar: string;

}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

// AuthContext armazena o current user;

export const AuthContext = createContext({

} as AuthContextDataProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log("Let's Login")
  }

  return(
    <AuthContext.Provider value={{signIn, user: {name: 'Luciano Silva', avatar: 'https://github.com/luciano-ferreira.png'}}}>
      {children}
    </AuthContext.Provider>
  )
}