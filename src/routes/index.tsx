import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import GuestRoutes from './guest.routes';
import AuthRoutes from './auth.routes';
import { ILoginContext } from '../types/types';
import MyContext from '../context/MyContext';

const Routes = () => {
  const {
    isLogged,
  } = useContext(MyContext) as ILoginContext;

  if (isLogged) {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <GuestRoutes />
    </NavigationContainer>
  )
}

export default Routes;
