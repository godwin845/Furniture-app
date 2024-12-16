import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { add } from '../store/cartSlice'; // Ensure this path matches your actual file structure
import { setProducts } from '../store/productSlice'; // Ensure you have an action to set products in your Redux slice

const Product = () => {
  const products = useSelector(state => state.products.data);
  const dispatch = useDispatch();

  // Fetch products from the backend using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://furniture-backend-px0y.onrender.com/api/products'); // Replace with your backend API URL
        dispatch(setProducts(response.data)); // Dispatch action to set products in Redux store
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product)); // Dispatch to add product to the cart
  };

  if (!products) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.productContainer}>
      <Text style={styles.heading}>Our <Text style={styles.highlight}>Products</Text></Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} addToCart={addToCart} />}
        numColumns={2}
      />
    </View>
  );
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <TouchableOpacity
      onPress={() => addToCart(product)} // Handle adding to cart on press
      style={styles.card} // No animation styles here
    >
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>₹: {product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 20,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  highlight: {
    color: '#FF5B61',
  },
  loadingText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 5, // for shadow on Android (no animation)
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardBody: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF5B61',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Product;