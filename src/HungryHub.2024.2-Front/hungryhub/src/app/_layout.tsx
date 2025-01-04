import React from "react";
import { Slot, Stack } from "expo-router";
import { CartProvider } from "./patterns/CartManager";
import { FavoriteProvider } from "./patterns/FavoriteObserver";

export default function RootLayout() {
    return (
        <CartProvider>
            <FavoriteProvider>
                <Slot />
            </FavoriteProvider>
        </CartProvider>
    );
}