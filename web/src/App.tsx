import React from 'react';

import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import { ToastProvider } from './hooks/ToastContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          {/* <SignUp /> */}
          <SignIn />
        </ToastProvider>
      </AuthProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
