// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MoviesList, { ListNavigator } from './pages/MoviesListPage';
import Home from './pages/Home';
// import { BlurView } from 'expo-blur';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import MovieDetails from './pages/MovieDetails';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MovieDetails from './pages/MovieDetails';
// import MovieCard from './components/MovieCard';


// const Stack=createNativeStackNavigator()

// function CardStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="card" component={MovieCard} />
//       <Stack.Screen name="Details" component={MovieDetails} />
//     </Stack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  "colors": {
    "primary": "#fd4d87",
    "onSecondary": "#ffd800",
    "onBackground": "#273178",
    "background":"#273178",
    "border": 'rgb(199, 199, 204)',
    "card": '#e91e63',
    "text": "#ffd800",
  }
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tab.Navigator
          // useLegacyImplementation
          // initialRouteName="MoviesList"
          screenOptions={{
            tabBarInactiveTintColor:theme.colors.onSecondary,
             tabBarActiveTintColor: theme.colors.onSecondary,
             headerShown: false,
            tabBarStyle: {backgroundColor:'#e91e63' },
          }}
          >
            <Tab.Screen name="Home" component={Home} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name="MoviesL" component={ListNavigator} 
            options={{
              tabBarLabel: 'Movies',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="filmstrip" color={color} size={size} />
              ),
            }}
            />
          </Tab.Navigator>
          
        </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.onBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
