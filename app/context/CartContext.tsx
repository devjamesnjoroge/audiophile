// context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/app/types';

interface CartContextProps {
  products: Product[];
  totalQty: number;
  totalCost: number;
  updateCart: (product: Product, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => JSON.parse(localStorage.getItem('products') || '[]'));
  const [totalQty, setTotalQty] = useState<number>(parseInt(localStorage.getItem('totalQty') || '0', 10));
  const [totalCost, setTotalCost] = useState<number>(parseFloat(localStorage.getItem('totalCost') || '0'));

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('totalQty', totalQty.toString());
    localStorage.setItem('totalCost', totalCost.toString());
  }, [products, totalQty, totalCost]);

  const updateCart = (product: Product, quantity: number) => {
    const updatedProducts = products.map((p: Product) => {
      if (p.model === product.model) {
        return { ...p, quantity };
      }
      return p;
    }).filter((p: Product) => p.quantity > 0);

    if (!updatedProducts.find((p: Product) => p.model === product.model)) {
      updatedProducts.push({ ...product, quantity });
    }

    setProducts(updatedProducts);
    const newTotalQty = updatedProducts.reduce((acc: number, p: Product) => acc + p.quantity, 0);
    setTotalQty(newTotalQty);
    const newTotalCost = updatedProducts.reduce((acc: number, p: Product) => acc + (p.price * p.quantity), 0);
    setTotalCost(newTotalCost);
  };

  return (
    <CartContext.Provider value={{ products, totalQty, totalCost, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
