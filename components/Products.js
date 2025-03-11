import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';

const Products = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const idRef = useRef(null);

  const getApiCall = async () => {
    try {
      const url = 'https://freetestapi.com/api/v1/products';
      let result = await fetch(url);
      result = await result.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePressableEvent = (id) => {
    idRef.current = id;
    Alert.alert('product clicked');
    navigation.navigate('ProductDetails',{id});
  };

  useEffect(() => {
    getApiCall();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data.length > 0 ? (
    data.map((item) => (
      <Pressable
        key={item.id}
        onPress={()=>{handlePressableEvent(item.id)}}
        style={({ pressed }) => [
          styles.item,
          { backgroundColor: pressed ? '#e0e0e0' : '#f9f9f9' },
        ]}
      >
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </Pressable>
    ))
  ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Products;
