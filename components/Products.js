import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert ,TextInput} from 'react-native';

const Products = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const idRef = useRef(null);

  const getApiCall = async () => {
    try {
      const url = 'https://freetestapi.com/api/v1/products';
      let result = await fetch(url);
      result = await result.json();
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePressableEvent = (id) => {
    idRef.current = id;
    // Alert.alert('product clicked');
    navigation.navigate('ProductDetails',{id});
  };

  useEffect(() => {
    getApiCall();
  }, []);

  useEffect(() => {
    console.log("Data:", data);
    console.log("Search Query:", searchQuery);
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("filter data block!!!");
    setFilteredData(results);
  }, [searchQuery, data]);

 return (
    <View style={styles.container}> <TextInput
        style={styles.searchBar}
        placeholder="Search here..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
<ScrollView style={styles.scrollView}>
  {filteredData.length > 0 ? (
    filteredData.map((item) => (
      <Pressable
        key={item.id}
        onPress={() => handlePressableEvent(item.id)}
        style={({ pressed }) => [
          styles.item,
          { backgroundColor: pressed ? '#e0e0e0' : '#f9f9f9' },
        ]}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    ))
  ) : (
    <Text style={styles.noDataText}>No items found</Text>
  )}
</ScrollView>

    </View>
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
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Products;
