import React from 'react';

import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';


import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/theme/theme';

import { Home } from './src/Screens/Home';

let customFonts = {
  'Inika-Regular': require('./src/assets/Fonts/Inika-Regular.ttf'),
  'Inika-Bold': require('./src/assets/Fonts/Inika-Bold.ttf'),
  'Alef-Regular': require('./src/assets/Fonts/Alef-Regular.ttf'),
}

export default function App() {

  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}