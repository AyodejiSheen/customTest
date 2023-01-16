import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/loginScreen';
import ProductScreen from './screens/productScreen';
import SignUpScreen from './screens/signupScreen';





export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={SignUpScreen}/>
        <Stack.Screen name="Product" component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

