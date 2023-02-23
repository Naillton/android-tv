import React, { useState } from 'react';
import MyContext from './MyContext';

import { IProvider } from '../types/types';

const MyProvider: React.FC<IProvider> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isLogged,
        failedTryLogin,
        setFailedTryLogin,
        setIsLogged,
      }}
    >
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider;
