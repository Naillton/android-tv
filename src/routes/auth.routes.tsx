import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Home' component={Home}/>
    </Navigator>
  )
}

export default AuthRoutes;
