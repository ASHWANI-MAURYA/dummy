import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './Screens/CategoryScreen';
import MealsOverViewScreen from './Screens/MealsOverViewScreen';
import MealDetailScreen from './Screens/mealDetailScreen'
import React from 'react'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='black' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}>
          <Stack.Screen name='MealsCategories' component={CategoryScreen}
            options={{ title: 'All Categories' }} />
          <Stack.Screen name='MealsOverView' component={MealsOverViewScreen}
          //  options={({route,navigation})=>{
          //   const catId=route.params.CategoryId;
          //   return{
          //     title:catId,

          //   };
          // }} 
          />
          <Stack.Screen name='MealDetailScreen' component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return (
            //       <Button />
            //     )
            //   }
            // }}
          />
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
