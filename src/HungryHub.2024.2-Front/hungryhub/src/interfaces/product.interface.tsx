export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    // rating: number;
    // image: string;
    // sales: number;
}

export interface ProductBody {
    name: string;
    description: string;
    price: number;
    // rating: number;
    // image: string;
    // sales: number;
}

// temporário
export interface ProductComplete {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    sales: number;
}