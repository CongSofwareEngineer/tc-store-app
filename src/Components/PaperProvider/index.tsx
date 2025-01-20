import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
const theme :ThemeProp= {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  }, 
  roundness:2
};

const PaperConfig = ({children}: {children: React.ReactNode}) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default PaperConfig;
