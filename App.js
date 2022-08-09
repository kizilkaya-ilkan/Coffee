import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './scr/screen/HomeScreen';
import Main from './scr/screen/Main';
import SatinAl from './scr/screen/SatinAl';
import Sepet from './scr/screen/Sepet';
import { Provider } from 'react-redux';
import { createStore  } from "redux";
import reducers from "./scr/redux";

const Stack = createNativeStackNavigator()
const App = () => {

  const store = createStore(reducers)

  return (
    <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}
      options={{headerShown:false}}/>
      <Stack.Screen name="MainScreen" component={Main}     
      options={{headerShown:false}}/>
      <Stack.Screen name="SatinAlma" component={SatinAl}      
      options={{headerShown:false}}/>
      <Stack.Screen name="Sepet" component={Sepet}      
      options={{headerShown:false}}/>
     </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
