import React from 'react';

import AppProvider from './hooks';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        {/* <SignUp /> */}
        <SignIn />
      </AppProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
