
"use client"

import CartCard from '@/@/components/cartCard';
import { RootState } from '@/@/store';
import { clearCart, removeFromCart } from '@/@/store/cartSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';






const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                onRemoveFromCart={() => handleRemoveFromCart(item.id)}
              />
            ))}
          </div>
          <div className="text-right mt-8">
            <button onClick={handleClearCart} className="bg-red-500 text-white py-2 px-4 rounded">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};


export default CartPage