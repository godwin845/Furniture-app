// Cart.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Import RootState type
import { remove } from '../store/cartSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // Assuming the image is a string URL
}

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  const removeFromCart = (id: number) => {
    dispatch(remove(id)); // Dispatch remove action to the Redux store
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'black' }}>
      <Text style={{ fontSize: 24, color: 'white', textAlign: 'center', marginBottom: 16 }}>
        My <Text style={{ color: 'red' }}>Cart</Text>
      </Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem product={item} removeFromCart={removeFromCart} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

interface CartItemProps {
  product: Product;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, removeFromCart }) => {
  return (
    <View style={{ flex: 1, margin: 8, borderRadius: 16, backgroundColor: 'white', elevation: 2, overflow: 'hidden' }}>
      <Image style={{ height: 160 }} source={{ uri: product.image }} />
      <View style={{ padding: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{product.name}</Text>
        <Text>₹: {product.price}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 8, borderRadius: 8, marginTop: 8 }}
          onPress={() => removeFromCart(product.id)}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;