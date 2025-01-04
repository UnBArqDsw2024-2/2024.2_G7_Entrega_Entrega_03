import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Store } from "../../../interfaces/store.interface";
import { storeService } from "../../../api/services/store.service";
import { useLocalSearchParams } from "expo-router/build/hooks";
import Caroussel from "../../../components/Caroussel";

const CategoryLookup = (category: string | undefined): string => {
  switch (category) {
    case "FF":
      return "Fast Food";
    case "PZ":
      return "Pizzaria";
    case "RT":
      return "Restaurante";
    case "CF":
      return "Cafeteria";
    case "PD":
      return "Padaria";
    default:
      return "Restaurante";
  }
}

export default function StoreDetails() {
  const { storeId } = useLocalSearchParams<{ storeId: string }>();
  const [store, setStore] = React.useState<Store | null>(null);

  useEffect(() => {
    console.log(storeId);
    const getStore = async () => {
      try {
        const response = await storeService.getStore(storeId);
        console.log(response);
        setStore(response);
      } catch (err) {
        console.error(err);
      }
    }
    getStore();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
      </View>
      <View style={styles.detailsContainer}>
        <Image style={styles.logo} source={{ uri: "https://abrale.org.br/wp-content/uploads/2022/07/shutterstock_288575585.jpg" }} />
        <View style={styles.details}>
          <Text style={styles.title}>{store?.first_name}</Text>
          <Text>{CategoryLookup(store?.categoria)}</Text>
          <Text>1,1 km, Min R$ 35,00</Text>
          <Text style={styles.waitingTime}>Entrega - Hoje, 30-60 min</Text>
        </View>
      </View>
      <View style={styles.contents}>
        <Caroussel />
        <Caroussel />
        <Caroussel />
        <Caroussel />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "scroll",
  },
  imageContainer: {
    width: "100%",
    height: 130,
    backgroundColor: "gray",
  },
  image: {
    width: "100%",
    height: 265,
    backgroundColor: "gray",
  },
  detailsContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: "white",
  },
  logo: {
    position: "relative",
    zIndex: 1,
    width: 50,
    height: 50,
    top: 35,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 0,
  },
  waitingTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contents: {
    width: "100%",
    height: "100%",
    padding: 10,
  }
});