import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Store } from "../../interfaces/store.interface";
import { storeService } from "../../api/services/store.service";

type StoreDetailsProps = {
  route: any;
}

export default function StoreDetails({ route } : StoreDetailsProps) {
  // const { id } = route.params;
  const [store, setStore] = React.useState<Store | null>(null);

  useEffect(() => {
    const getStore = async () => {
      try {
        const response = await storeService.getStores();
        console.log(response);
        setStore(response.data); 
      } catch (err) {
        console.error(err);
      }
    }
    getStore();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.image}>

      </View>
      <View style={styles.details}>
        <Text style={styles.title}>nome</Text>
        <Text>categoria</Text>
        <Text>1,1 km, Min R$ 35,00</Text>
        <Text style={styles.waitingTime}>Entrega - Hoje, 30-60 min</Text>
      </View>
      <View style={styles.contents}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
  },
  details: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "white",
  }
});