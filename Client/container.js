// import React from "react";
// import {NavigationContainer} from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "native-base";


// import Calculator from "./src/components/calculator";
// import Home from "./src/components/home";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

// function Navigasi (){

//     return (
//         <Tab.Navigator
//           initialRouteName="Home"
//           screenOptions={({ route }) => ({
//             headerMode: "screen",
//             headerTintColor: "white",
//             // headerStyle: { backgroundColor: theme.colors.primary["300"] },
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
    
//               if (route.name === "Home") {
//                 iconName = focused ? "ios-home" : "ios-home-outline";
//               } else if (route.name === "Calculator") {
//                 iconName = focused
//                   ? "ios-information-circle"
//                   : "ios-information-circle-outline";
//                 }  
//              // else if (route.name === "") {
//             //     iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
//             //   }
    
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             // tabBarActiveTintColor: theme.colors.primary["800"],
//             // tabBarInactiveTintColor: "gray",
//           })}
//         >
//           <Tab.Screen name="Home" component={Home} />
//           <Tab.Screen name="Calculator" component={Calculator} />
//           {/* <Tab.Screen name="Social Media" component={ListSoc} /> */}
//         </Tab.Navigator>
//       );
//     }
    

// export default function Container(){
//     return (
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen
//               name="Main"
//               component={Navigasi}
//               options={{
//                 headerShown: false,
//               }}
//             />
//           <Stack.Screen
//               name="Calculator"
//               component={Home}
//               options={{
//                 // title: "Increment & Decrement",
//                 // headerMode: "screen",
//                 // headerTintColor: "black",
//                 // headerStyle: { backgroundColor: theme.colors.primary["300"] },
//               }}
//             /> 
            
//             <Stack.Screen
//               name="Detail Social"
//               component={Calculator}
//               options={{
//                 title: "Detail Social",
//                 headerMode: "screen",
//                 headerTintColor: "white",
              
//               }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       );
    
// }