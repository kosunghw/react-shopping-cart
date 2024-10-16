import Navbar from '../components/Navbar';
import Category from '../components/Category';
import { useState, useEffect } from 'react';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  return (
    <>
      <h1>This is Shop Page!</h1>
      <Navbar />
      <Category />
      <ul>
        {products.map((product) => {
          return (
            <>
              <li key={product.id}>{product.title}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}
