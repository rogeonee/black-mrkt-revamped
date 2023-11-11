import React from 'react';
import { Product } from '../models/product';
import styles from '../styles/components/ProductCard.module.css'; // Make sure to create this CSS module

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    // Add to cart logic goes here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
