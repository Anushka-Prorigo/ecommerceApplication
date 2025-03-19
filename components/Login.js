import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text ,Alert} from 'react-native';
import HomePage from './HomePage';

const Login  = ({navigation,...props}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users');
      const users = await response.json();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        navigation.navigate(HomePage,{id:user.id});
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:80,
        marginBottom:80,
      
    },
    TextInput:{
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        margin:10,
        width:300,
    },
    Button:{
        padding:10,
        margin:10,
        width:50,
        color:'blue',
    },
    title:{
      fontSize:35,
      fontWeight:'bold',
    },
});
export default Login;
