
"use client";

import React, { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import ProductList from "../components/productList";
import Link from "next/link";




const Home: React.FC = () => {
  const [products ,setproducts]=useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    getproducts();
   },[])
   const getproducts =async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data =await res.json();
    setproducts(data);
  }
  


  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    console.log(product);
    
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4"> <Link href={"/"}> Shop Page</Link></h1>
     
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};




export default Home;
