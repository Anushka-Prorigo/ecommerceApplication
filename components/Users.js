import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, ScrollView, Pressable, ActivityIndicator} from 'react-native';
import user from '/Users/anushkap/Documents/reactnative/ecommerceApplication/json/user.json';
const Users = () => {
  const[data,setData] = useState('');
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    try {
      const url = 'https://api.escuelajs.co/api/v1/users';
      let response = await fetch(url);
      let json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error in fetching data of users', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}> {item.id}.{item.name}</Text>
            <View style={styles.line} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  dataText: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
  },
});
export default Users;
