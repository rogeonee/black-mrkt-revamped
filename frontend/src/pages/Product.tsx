import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/pages/Product.module.css';
import { Product } from '../models/product';

const ProductPage = () => {

  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams();

  useEffect(() => {
    // Here you would fetch the product details from an API or some data source
    // For demonstration, I'm using a static list of products as placeholders
    const products = [
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
    ];

    // Simulate fetching the product data:
    const productData = products.find(p => p.id.toString() === productId);
    if (productData) {
      setProduct(productData);
    } else {
      // Handle the case where the product is not found
      // For now, we can set it to null or show an error
      setProduct(null);
      // You could also set some error state and display an error message if you prefer
    }
  }, [productId]);

  if (!product) {
    // Render a loading state or a 'product not found' message
    return <div>Product not found or loading...</div>;
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div className={styles.productContainer}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h1 className={styles.productTitle}>{product.name}</h1>
      <p className={styles.productDescription}>{product.description}</p>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
