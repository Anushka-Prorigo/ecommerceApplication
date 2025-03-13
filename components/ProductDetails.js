import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';

const ProductDetails = ({ route }) => {
    const { id } = route.params || {};  // Extract product id from params
    const [product, setProduct] = useState(null);  // Store product details
    const [loading, setLoading] = useState(true);  // Track loading state
    const [error, setError] = useState(null);  // Track error state
    const navigation = useNavigation();

    useEffect(() => {
        if (!id) return;  // If no id, do not fetch

        const fetchProductDetails = async () => {
            setLoading(true);  // Start loading
            setError(null);  // Reset any previous errors

            try {
                const response = await fetch(`https://freetestapi.com/api/v1/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product details');
                const productData = await response.json();
                setProduct(productData);  // Update product state
            } catch (error) {
                setError(error.message);  // Set error state
            } finally {
                setLoading(false);  // Stop loading
            }
        };

        fetchProductDetails();  // Call fetch function
    }, [id]);  // Only re-run the effect if id changes

    const handleUpdateProductDetails = () => {
        // Navigate to UpdateProductDetails screen, passing the product data
        navigation.navigate('UpdateProductDetails', { product });
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;  // Show loading indicator if loading is true
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );  // Display error message if fetch fails
    }

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product not found or ID missing.</Text>
            </View>
        );  // Handle case when no product is found
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button
                title="Update Product Details"
                onPress={handleUpdateProductDetails}  // Trigger navigation to update product
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
