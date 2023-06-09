import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DailyPic from "./screens/DailyPic"
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
const Stack=createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
    </NavigationContainer>
    );
}
export default App;