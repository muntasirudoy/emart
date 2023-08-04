import React from 'react';
import ProductCard from './productCard';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}


const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
