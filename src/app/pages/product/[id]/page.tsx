
"use client"
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Image from 'next/image';
import { addToCart } from '@/@/store/cartSlice';
import { Product } from '@/@/types';
import { useParams   } from 'next/navigation';


interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = () => {
  const param =  useParams()

const [product,setproduct] = useState({
  id:0,
  title:"",
  image:"",
  price:0,
  description:"",
  category:""
})
  useEffect(()=>{
  const fetchData=async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
    setproduct(res.data)
  }


  
  fetchData()
  },[])

  
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} width={128} height={128}  className="mx-auto mb-4" />
      <p className="text-gray-700 mb-2">${product.price?.toFixed(2)}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};


export default ProductPage;
