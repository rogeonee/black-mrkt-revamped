import React from 'react';
import styles from '../styles/Product.module.css';

// <Link to={`/product/${product.id}`}>{product.name}</Link>

const ProductPage = () => {
  const product = {
    id: 1,
    name: "Fresh Avocados",
    description: "A pack of 5 ripe avocados.",
    image: "../../assets/avocado.jpg"
  };

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
