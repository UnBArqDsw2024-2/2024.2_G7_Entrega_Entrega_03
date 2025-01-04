import React, { createContext, useContext, ReactNode } from 'react';

interface CartContextType {
    addToCart: (productId: string, quantity: number) => void;
    getQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | null>(null);

class CartManager {
    private static instance: CartManager;
    private cart: Map<string, number> = new Map();

    private constructor() { }

    public static getInstance(): CartManager {
        if (!CartManager.instance) {
            CartManager.instance = new CartManager();
        }
        return CartManager.instance;
    }

    addToCart(productId: string, quantity: number) {
        const currentQuantity = this.cart.get(productId) || 0;
        this.cart.set(productId, currentQuantity + quantity);
    }

    getQuantity(productId: string): number {
        return this.cart.get(productId) || 0;
    }
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const cartManager = CartManager.getInstance();

    return (
        <CartContext.Provider value={cartManager}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('hook só pode ser usado dentro do provider');
    }
    return context;
};