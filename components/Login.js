import React from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';

const Login  = ({navigation,...props}) => {
    const {email} = props.route.params;
    console.log('email:',email);
    const handleOnpress = () =>{
        navigation.navigate('HomePage');
    };
    return (
        <View style={styles.container}>
            <Text>Enter Username</Text>
            <TextInput placeholder="Enter Email" value={email} keyboardType="text" style={styles.TextInput}/>
            <Text>Enter Password</Text>
            <TextInput placeholder="Enter Password"  keyboardType="numeric" style={styles.TextInput}/>
            <Button title="Login" style={styles.Button} onPress={handleOnpress}/>
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
export default Login;
