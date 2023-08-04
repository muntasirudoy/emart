

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white drop-shadow-2xl">
      <img src={image} alt={title} className=" w-[80%] h-52 mx-auto mb-4" />
      <div className="h-24">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2"><Link href={`pages/product/${id}`}>{title}</Link></h2>
        <p className="text-gray-700 mb-4">${price.toFixed(2)}</p>
      </div>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
