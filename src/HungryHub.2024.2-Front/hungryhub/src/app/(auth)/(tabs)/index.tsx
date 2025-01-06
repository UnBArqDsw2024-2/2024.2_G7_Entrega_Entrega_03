import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from "expo-router";
import { userService } from "../../../api/services/user.service";
//import LinkButton from "../../../components/LinkButton";
import { Product } from '../../../interfaces/product.interface';
import ProductSection from '../../../components/ProductSection';
import Header from '../../../components/Header';
import {
  HomeSection,
  RecommendationSectionFactory,
  PromotionSectionFactory,
  FrequentOrdersSectionFactory
} from '../../../components/ProductSectionFactory';

export default function Home() {
  const [sections, setSections] = useState<HomeSection[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const factories = [
      new RecommendationSectionFactory(),
      new PromotionSectionFactory(),
      new FrequentOrdersSectionFactory()
    ];

    const loadedSections = factories.map(factory => factory.createSection());
    setSections(loadedSections);

  };

  const goToProductDetails = (product: Product) => {
    router.push({
      pathname: `/product/${product.id}`,
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {sections.map((section, index) => (
          <ProductSection
            key={index}
            title={section.title}
            products={section.products}
            onProductPress={goToProductDetails}
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