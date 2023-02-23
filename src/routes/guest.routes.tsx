import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigIn from '../screens/sigin';
import Register from '../screens/register';

const { Navigator, Screen } = createNativeStackNavigator();

const GuestRoutes = () => {
  return (
    <Navigator
      initialRouteName='SingIn'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='SingIn' component={SigIn} />
      <Screen name='SingUp' component={Register} />
    </Navigator>
  )
}

export default GuestRoutes;
