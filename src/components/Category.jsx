import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <>
        <nav>
          <ul>
            {categories.map((category) => {
              return (
                <>
                  <li>
                    <NavLink to={`categories/${category}`}>{category}</NavLink>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </>
    </>
  );
}
