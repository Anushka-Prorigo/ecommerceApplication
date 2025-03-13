/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';

const ProductDetails = ({ route }) => {
    const { id } = route.params || {};
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    useEffect (() =>{
        fetchProductDetails();
    },[id]);

        const fetchProductDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://freetestapi.com/api/v1/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product details');
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

    const handleUpdateProductDetails = () => {
        navigation.navigate('UpdateProductDetails',{id:product.id});
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
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button
                title="Update Product Details"
                onPress={handleUpdateProductDetails}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductDetails;
