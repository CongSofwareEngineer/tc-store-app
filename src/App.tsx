import React from 'react';
import ApplicationNavigator from '@/Navigators';
import 'react-native-gesture-handler';
import '../global.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PaperConfig from '@/Components/PaperProvider';
  
const queryClient = new QueryClient();
const App = () => {
  return (
    <PaperConfig>
      <QueryClientProvider client={queryClient}>
        <ApplicationNavigator />
      </QueryClientProvider>
    </PaperConfig>
  );
};

export default App;

// import { View, Text } from 'react-native'
// import React from 'react'

// const AppScreen = () => {
//   return (
//     <View>
//       <Text>AppScreen</Text>
//     </View>
//   )
// }

// export default AppScreen
