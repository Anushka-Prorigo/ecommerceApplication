import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
    const { id } = route.params || {};
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        let isMounted = true;
        const fetchProductDetails = async () => {
            try {
                console.log('Fetching details for product with ID:', id);
                const response = await fetch(`https://freetestapi.com/api/v1/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product details');
                const productData = await response.json();
                if (isMounted) setProduct(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchProductDetails();
        return () => {
            isMounted = false;
            console.log('ProductDetails useEffect cleanup');
        };
    }, [id]);

    const handleUpdateProduct = () => {
      console.log('Navigating to UpdateProductDetails');
        navigation.navigate('UpdateProductDetails',{ id: product.id });
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
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
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button title="Update Product Details" onPress={handleUpdateProduct} />
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
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
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
});

export default ProductDetails;
