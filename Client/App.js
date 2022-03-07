// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';

// import Container from './container';
// import Home from './src/components/home';


// export default function App() {
  
//   return (
    
//     <View style={styles.container}>
//   <Container />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blark',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";



import Calculator from "./src/components/calculator";
import Home from "./src/components/home";
import Add from "./src/components/add";
import Edit from "./src/components/edit";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Navigasi (){
 
    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "grey" },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Calculator") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                }  
             else if (route.name === "") {
                iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            // tabBarActiveTintColor: theme.colors.primary["800"],
            // tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Calculator" component={Calculator} />
          <Tab.Screen name="Add" component={Add} />
          <Tab.Screen name="Edit" component={Edit} />
        </Tab.Navigator>
      );
    }
    

export default function App(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={Navigasi}
              options={{
                headerShown: false,
              }}
            />
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                headerMode: "screen",
                headerTintColor: "black",
                headerStyle: { backgroundColor: "black" },
              }}
            /> 
            
            <Stack.Screen
              name="Calculator"
              component={Calculator}
              options={{
                title: "Calculator",
                headerMode: "screen",
                headerTintColor: "white",
              
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    
}