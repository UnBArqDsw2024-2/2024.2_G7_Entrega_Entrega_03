import { Product } from "../app/(auth)/(tabs)/search";
import { Store } from "./store.interface";

export interface SearchStrategy<T> {
    filter(data: T[], query: string): T[];
}

export class StoreSearchStrategy implements SearchStrategy<Store> {
    filter(data: Store[], query: string): Store[] {
        return data.filter((store) => store.first_name.toLowerCase().includes(query.toLowerCase()));
    }
}

export class SnackSearchStrategy implements SearchStrategy<Product> {
    filter(data: Product[], query: string): Product[] {
        return data.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    }
}