import * as React from 'react'
//!import tab bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//!import vector icons
import { Ionicons } from "@expo/vector-icons"

//!import navigation Container
import { NavigationContainer } from '@react-navigation/native'

//!import Stack Navigation
import { createStackNavigator } from '@react-navigation/stack';

//!import Theme Native Base
import { useTheme } from 'native-base';

//import screen
import IndDec from './src/screen/inDec'
import Hello from './src/screen/hello'
import TodoApp from './src/screen/TodoApp'
import Calculator from './src/screen/Calculator'


//create Stack Navigator
const Stack = createStackNavigator()

//create bottom stack 
const Tab = createBottomTabNavigator()

//create component bottom navigation
function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Hello"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.rose["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name == "Hello") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name == "Todo") {
            iconName = focused ? "list" : "list-outline"
          } else if (route.name == "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.colors.rose["800"],
        tabBarInactiveTintColor: "black"
      })}
    >
      <Tab.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
      <Tab.Screen name="Todo" component={TodoApp} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default function Container() {
  const theme = useTheme()
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.rose["400"] }
        }}
      >
        <Stack.Screen
          name='Home'
          component={MyTab}
          options={{
            title: "Hello Screen"
          }}
        />
        <Stack.Screen
          name='Number'
          component={IndDec}
          options={{
            title: "Increment Decrement Number Screen"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
