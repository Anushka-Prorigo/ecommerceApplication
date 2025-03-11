import React, { useState } from 'react';
import {View, Alert, StyleSheet, TouchableOpacity,Text} from 'react-native';
import Menubar from './Menubar';
import { useNavigation } from '@react-navigation/native';

const HomePage = (props) => {
  const[menuVisible,setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const id = props.route?.id;
  const toggleMenu = () =>{
    setMenuVisible(!menuVisible);
  };
  const handleMenuItemPress = event => {
    switch (event) {
      case 'home':
        Alert.alert('home clicked');
        navigation.navigate('Home');
        break;
      case 'about':
        Alert.alert('about clicked');
        navigation.navigate('About');
        break;
      case 'contact':
        Alert.alert('contact clicked');
        break;
      case 'allUsers':
        Alert.alert('Users clicked');
        navigation.navigate('Users');
        break;
      case 'profile':
        navigation.navigate('Profile',{id});
        break;
      case 'products':
          Alert.alert('Products clicked');
          navigation.navigate('Products');
          break;
      default:
        Alert.alert('default clicked');
        break;
    }
  };
return (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton} >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      </View>
    {!menuVisible && (<View style={styles.menu}>
      <Menubar onItemPress={handleMenuItemPress} />
    </View>)}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#6200ee',
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: 'white',
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 10,
  },
});
export default HomePage;
