// components/Qty.tsx
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

// components/Qty.tsx
import { Product } from '@/app/types';

type QtyProps = {
  product: Product;
  updateCart: (product: Product, quantity: number) => void;
};

const Qty: React.FC<QtyProps> = ({ product, updateCart }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  useEffect (() => {

  }, [quantity]);

  return (
    <div className="flex w-fit-content h-fit-content mt-8">
      <span className='w-fit-content h-fit-content px-4 py-1 rounded-sm text-secondary font-bold'>Quantity:</span>
      <button className="btn w-fit-content h-fit-content px-4 py-1 rounded-sm bg-primary" onClick={handleDecrement}>-</button>
      <span className="w-fit-content h-fit-content px-4 py-1 rounded-sm text-secondary">{quantity}</span>
      <button className="btn w-fit-content h-fit-content px-4 py-1 rounded-sm bg-primary" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Qty;
