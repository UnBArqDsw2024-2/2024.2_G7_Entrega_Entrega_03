import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { storeService } from "../../../api/services/store.service";
import { Store } from "../../../interfaces/store.interface";
import LinkButton from "../../../components/LinkButton";
import { Link } from "expo-router";

export default function Search() {
    const [stores, setStores] = useState<Store[]>([]);

    useEffect(() => {
        const getStores = async () => {
            try {
                const response = await storeService.getStores();
                setStores(response);
            } catch (err) {
                console.error(err);
            }
        }
        getStores();
    }, []);

    return (
        <View>

            <Text>
                {stores?.map((store) => (
                    <Link key={store.id} href={`/storeDetails/${store.id}`}>{store.id} {store.first_name}</Link>
                ))}
            </Text>
        </View>
    );
}