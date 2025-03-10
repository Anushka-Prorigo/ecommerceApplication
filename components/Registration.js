import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button ,Text, ActivityIndicator } from 'react-native';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native';

const Registration  = () => {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const navigation = useNavigation();
    const[activityIndicator,setActivityIndicator] = useState(false);
    const handlePress = () =>{
        navigation.navigate('Login',{email:email});
        setActivityIndicator(true);
        setTimeout(() =>{
            setActivityIndicator(false);
        },3000);
    };
    return (
        <View style={styles.container}>
            <Text style={{color:'blue' ,fontSize:40}}>Registration Page</Text>
             <Text>Enter Username</Text>
            <TextInput id="userName" value={userName} onChangeText={setUserName} placeholder="Enter name" style={styles.TextInput} onFocus={() => console.log('TextInput focused')}/>
             <Text>Enter Email</Text>
            <TextInput id="email" value={email} onChangeText={setEmail} placeholder="Enter Email" keyboardType="text" style={styles.TextInput}/>
             <Text>Enter Password</Text>
            <TextInput id="password" placeholder="Enter Password" keyboardType="numeric" style={styles.TextInput}/>
            <Text>Select Gender:</Text>
            <RadioButtons/>
            <ActivityIndicator size={100} color="black" animating={activityIndicator} />
            <Button title="Save" style={styles.Button} onPress={handlePress}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
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
});
export default Registration;
