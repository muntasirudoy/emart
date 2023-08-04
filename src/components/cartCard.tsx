import React from 'react';

interface CartCardProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onRemoveFromCart: () => void;
}

const CartCard: React.FC<CartCardProps> = ({ id, title, price, quantity, onRemoveFromCart }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <button onClick={onRemoveFromCart} className="bg-red-500 text-white py-2 px-4 rounded">
        Remove
      </button>
    </div>
  );
};

export default CartCard;
