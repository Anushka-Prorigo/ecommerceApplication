import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button ,Text, ActivityIndicator, Alert } from 'react-native';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native';

const Registration  = () => {
    const [id,setId] = useState('');
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('customer');
    const [image,setImage] = useState('https://i.imgur.com/LDOO4Qs.jpg');
    const navigation = useNavigation();
    const [activityIndicator,setActivityIndicator] = useState(false);

    const handlePress = () =>{
        navigation.navigate('Login',{email:email});
        setActivityIndicator(true);
        setTimeout(() => {
            setActivityIndicator(false);
        },3000);
    };

    const handleRegisterPress = async() => {
          const url = "https://api.escuelajs.co/api/v1/users/";
          let result = await fetch(url ,{
            method :"POST",
            headers:{"Content-Type":"application/json"},
            body :JSON.stringify({id:id,email:email,password:password,name:userName,role:role,avatar:image}),
        });
          result = await result.json();
          if(result)
          {
            Alert.alert("data saved");
            handlePress();
          }
          else{
            Alert.alert("something went wrong");
          }
    };
    return (
        <View style={styles.container}>
            <Text style={{color:'black' ,fontSize:30,marginBottom:10}}>Registration Page</Text>
             <Text>Enter Id</Text>
            <TextInput
              id="id"
              value={id}
              onChangeText={setId}
              placeholder="Enter Id"
              style={styles.TextInput}
              onFocus={() => console.log('TextInput focused')}/>
            <Text>Enter Email</Text>
            <TextInput
              id="userEmail"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Email"
              keyboardType="text"
              style={styles.TextInput}
              onFocus={() => console.log('TextInput focused')}/>
             <Text>Enter Password</Text>
            <TextInput
              id="password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter Password"
              keyboardType="numeric"
              style={styles.TextInput}
              onFocus={() => console.log('TextInput focused')}/>
            <Text>Enter Username</Text>
            <TextInput
              id="userName"
              value={userName}
              onChangeText={setUserName}
              placeholder="Enter name"
              style={styles.TextInput}
              onFocus={() => console.log('TextInput focused')}/>
            <Text>Enter Role</Text>
            <TextInput
              id="role"
              value={role}
              onChangeText={setRole}
              placeholder="Enter Role"
              keyboardType="text"
              style={styles.TextInput}
              onFocus={() => console.log('TextInput focused')}/>
            <Text>Enter Image</Text>
            <TextInput
              id="image"
              value={image}
              onChangeText={setImage}
              placeholder="Enter image"
              keyboardType="numeric"
              style={styles.TextInput}
              onFocus={() => console.log('TextInput focused')}/>
            <Text>Select Gender:</Text>
            <RadioButtons/>
            <View style={styles.buttonContainer}>
            <ActivityIndicator size={100} color="black" animating={activityIndicator} />
            <Button title="Register" style={styles.Button} onPress={handleRegisterPress}/>
            <Button title="Login" style={styles.Button} onPress={handlePress}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginHorizontal:8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '60%',
      },
});
export default Registration;
