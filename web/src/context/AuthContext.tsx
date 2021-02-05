import React, { createContext, useCallback } from 'react';

interface AuthContextState {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Bruno', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
