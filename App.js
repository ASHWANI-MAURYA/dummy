import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './Screens/CategoryScreen';
import MealsOverViewScreen from './Screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='black' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoryScreen}  />
          <Stack.Screen name='MealsOverView' component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
