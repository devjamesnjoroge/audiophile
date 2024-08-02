// components/Cart.tsx
import useLocalStorage from 'use-local-storage';
import Qty from '@/app/ui/qty';
import { useEffect } from 'react';
import { Product } from '@/app/types';

const Cart = () => {
  const [products, setProducts] = useLocalStorage<Product[]>('products', []);
  const [totalQty, setTotalQty] = useLocalStorage('totalQty', 0);
  const [totalCost, setTotalCost] = useLocalStorage('totalCost', 0);

  useEffect(() => {
    let cost = 0;
    products.forEach((product: Product) => {
      cost += product.price * product.quantity;
    });
    setTotalCost(cost);
  }, [products, setTotalCost]);

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
  };

  return (
    <div className="flex flex-col">
      {totalQty === 0 ? (
        <h1>Total Items in Cart is 0</h1>
      ) : (
        products.map((product: Product) => (
          <div className="flex" key={product.model}>
           <div
            className="rounded-md"
            style={{ backgroundImage: `url(${product.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>

            <span>{product.quantity}</span>
            <Qty product={product} updateCart={updateCart} />
            <span>{product.price}</span>
          </div>
        ))
      )}
      <p>Total Cost: {totalCost}</p>
    </div>
  );
};

export default Cart;
