import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../models/product';
import styles from '../styles/pages/Home.module.css';

const HomePage: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: 1,
      name: "Organic Avocados",
      description: "A pack of 5 ripe and ready-to-eat organic avocados.",
      image: "/assets/avocado.jpg"
    },
    {
      id: 2,
      name: "Almond Milk",
      description: "A 1-liter carton of unsweetened almond milk.",
      image: "/assets/almond-milk.jpg"
    },
    {
      id: 3,
      name: "Quinoa Grain",
      description: "500g of high-quality, organic quinoa grains.",
      image: "/assets/quinoa.png"
    },
    {
      id: 4,
      name: "Whole Wheat Bread",
      description: "A loaf of freshly baked whole wheat bread.",
      image: "/assets/bread.jpg"
    },
    {
      id: 5,
      name: "Granola Mix",
      description: "A 300g bag of mixed granola with nuts and dried fruits.",
      image: "/assets/granola.jpg"
    },
    {
      id: 6,
      name: "Green Tea",
      description: "Box of 20 organic green tea bags.",
      image: "/assets/green-tea.jpg"
    },
    {
      id: 7,
      name: "Dark Chocolate",
      description: "85% cacao dark chocolate bar, rich in antioxidants.",
      image: "/assets/chocolate.jpg"
    }
  ]);
  

  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Home Page</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
