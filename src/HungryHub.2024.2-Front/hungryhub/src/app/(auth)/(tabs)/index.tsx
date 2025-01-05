import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from "expo-router";
import { userService } from "../../../api/services/user.service";
//import LinkButton from "../../../components/LinkButton";
import { Product } from '../../../interfaces/product.interface';
import ProductSection from '../../../components/ProductSection';
import Header from '../../../components/Header';


/*   const goToProductDetails = async () => {
    router.push({
      pathname: "/product/1",
    });
  }
 
*/

interface HomeSection {
  title: string;
  products: Product[];
}

const mockProduct: Product = {
  id: '1',
  name: 'Pizza',
  description: 'Pizza com refrigerante',
  price: 40.90,
  rating: 4.7,
  isFavorite: false,
  image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  sales: 1600
};

export default function Home() {

  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [promotions, setPromotions] = useState<Product[]>([]);
  const [frequentOrders, setFrequentOrders] = useState<Product[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // ligado ao mock 
    setRecommendations([mockProduct, mockProduct, mockProduct]);
    setPromotions([mockProduct, mockProduct]);
    setFrequentOrders([mockProduct, mockProduct, mockProduct, mockProduct, mockProduct, mockProduct]);

  };

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: `/product/${product.id}`,
      // ligado ao mock 
      params: {
        productData: JSON.stringify(product)
      }
    });
  };

  const sections: HomeSection[] = [
    { title: 'Recomendações', products: recommendations },
    { title: 'Promoções', products: promotions },
    { title: 'Seus pedidos frequentes', products: frequentOrders }
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {sections.map((section, index) => (
          <ProductSection
            key={index}
            title={section.title}
            products={section.products}
            onProductPress={handleProductPress}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});