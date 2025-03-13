// import React, {useEffect, useState} from 'react';
// import {Text, View, Alert, StyleSheet, Button} from 'react-native';
// import UpdateProductDetails from './UpdateProductDetails';
// import { useNavigation } from '@react-navigation/native';

// const ProductDetail = () => {
//   const [product, setProduct] = useState('');
//   const navigation = useNavigation();

//   const fetchProductDetails = async () => {
//     const url = 'https://freetestapi.com/api/v1/products/1';
//     let result = await fetch(url);
//     result = await result.json();
//     setProduct(result);
//   };

//   const handleUpdateProductDetails = () =>{
//     navigation.navigate('UpdateProductDetails');
//   };
//   useEffect(() => {
//     Alert.alert('hello');
//     fetchProductDetails();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.price}>Price: ${product.price}</Text>
//       <Button title='UpdateProductDetails' onPress={handleUpdateProductDetails}></Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
// export default ProductDetail;
