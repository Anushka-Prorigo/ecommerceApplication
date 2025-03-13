/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet, Button } from 'react-native';

const ProductDetails = ({ route }) => {
    const { id } = route.params || {};
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            handleInputChange();
        }},[id]);

    const handleInputChange = (field, value) => {
        setProduct({ ...product, [field]: value });
    };

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error('Failed to save product changes');
            }

            alert('Product details updated successfully!');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product not found or ID missing.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Product Name:</Text>
            <TextInput
                style={styles.input}
                value={product.name}
                onChangeText={(text) => handleInputChange('name', text)}
            />

            <Text style={styles.label}>Product Description:</Text>
            <TextInput
                style={styles.input}
                value={product.description}
                onChangeText={(text) => handleInputChange('description', text)}
            />

            <Text style={styles.label}>Product Price:</Text>
            <TextInput
                style={styles.input}
                value={String(product.price)}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange('price', parseFloat(text))}
            />

            <Button title="Save Changes" onPress={handleSaveChanges} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProductDetails;
