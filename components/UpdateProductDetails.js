import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UpdateProductDetails = ({ route, navigation }) => {
    const { id } = route.params;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const updateProductDetails = async () => {
        try {
            if (!name || !description || !price) {
                Alert.alert('Validation Error', 'All fields are required.');
                return;
            }

            const url = `https://freetestapi.com/api/v1/products/${id}`;
            const updatedData = {
                name,
                description,
                price: parseFloat(price),
            };

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`Failed to update product: ${response.status}`);
            }

            const result = await response.json();
            Alert.alert('Success', 'Product updated successfully!');
            console.log('Update Response:', result);
            navigation.goBack();
        } catch (error) {
            console.error('Error updating product:', error);
            Alert.alert('Error', 'Failed to update the product. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Product Details</Text>

            <TextInput
                style={styles.input}
                placeholder="Product Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Product Description"
                value={description}
                onChangeText={setDescription}
            />

            <TextInput
                style={styles.input}
                placeholder="Product Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />

            <Button title="Update Product" onPress={updateProductDetails} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default UpdateProductDetails;
