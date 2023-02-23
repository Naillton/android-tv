import React from 'react';
import Routes from './src/routes';
import MyProvider from './src/context/MyProvider';

export default function App() {
  return (
    <MyProvider>
      <Routes />
    </MyProvider>
  );
}
