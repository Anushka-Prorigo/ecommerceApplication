import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './components/Registration';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Profile from './components/Profile';
import RadioButtons from './components/RadioButtons';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import UpdateProductDetails from './components/ProductDetails';

const Stack = createNativeStackNavigator();
function App () {
   return (
    <NavigationContainer >
         <Stack.Navigator initialRouteName="Registration Page">
            <Stack.Screen name="Registration Page" component={Registration} options={{headerShadowVisible:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShadowVisible:false}} />
            <Stack.Screen name="HomePage" component={HomePage} options={{headerShadowVisible:false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShadowVisible:false}} />
            <Stack.Screen name="About" component={About} options={{headerShadowVisible:false}}/>
            <Stack.Screen name="Users" component={Users} options={{headerShadowVisible:false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShadowVisible:false}}/>
            <Stack.Screen name="radioButtons" component={RadioButtons} options={{headerShadowVisible:false}}/>
            <Stack.Screen name="Products" component={Products} options={{headerShadowVisible:false}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShadowVisible:false}}/>
            <Stack.Screen name="UpdateProductDetails" component={UpdateProductDetails} options={{headerShadowVisible:false}}/>
         </Stack.Navigator>
    </NavigationContainer>
   );
}

export default App;

