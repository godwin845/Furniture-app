// Cart.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice'; // Adjust based on your project structure

const Cart = () => {
  const cartItems = useSelector(state => state.cart); // Get cart items from Redux store
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id)); // Dispatch remove action to the Redux store
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My <Text style={styles.highlight}>Cart</Text></Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem product={item} removeFromCart={removeFromCart} />}
        numColumns={2}
      />
    </View>
  );
};

const CartItem = ({ product, removeFromCart }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>₹: {product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => removeFromCart(product.id)}>
          <Text style={styles.buttonText}>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
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
    elevation: 5,
    overflow: 'hidden',
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

export default Cart;