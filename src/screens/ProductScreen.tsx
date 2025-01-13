// Product.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store/store';
import { setProducts } from '../store/productSlice';
import { add } from '../store/cartSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string; // Assuming imageUrl is a string URL
}

const Product = () => {
  const products = useSelector((state: RootState) => state.products.data);
  const dispatch = useDispatch();

  // Fetch products from the backend using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.159.73:10000/api/products');
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const addToCart = (product: Product) => {
    dispatch(add(product)); // Dispatch to add product to the cart
  };

  if (!products.length) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={{ backgroundColor: 'black', padding: 16 }}>
      <Text style={{ fontSize: 24, color: 'white', textAlign: 'center', marginBottom: 16 }}>
        Our <Text style={{ color: 'red' }}>Products</Text>
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} addToCart={addToCart} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, margin: 8, borderRadius: 24, backgroundColor: 'white', elevation: 2 }}
      onPress={() => addToCart(product)}
    >
      <Image source={{ uri: product.imageUrl }} style={{ height: 140 }} />
      <View style={{ padding: 12, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{product.name}</Text>
        <Text style={{ textAlign: 'center', padding: 4 }}>₹: {product.price}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 8, borderRadius: 8 }}
          onPress={() => addToCart(product)}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Product;