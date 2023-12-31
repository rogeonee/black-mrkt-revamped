import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  const isLoggedIn = true;  // Hardcoded for now
  
// <Link to="/" className={styles.logo}>Website Logo</Link>

return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.logo}>Website Logo</Link>
      <nav className={styles.navLinks}>
        <Link to="/home">Home</Link>
        <Link to="/cart">Shopping Cart</Link>
        {
          isLoggedIn 
            ? (
              <>
                <Link to="/account" onClick={() => console.log('Your account')}>My Account</Link>
                <Link to="/login" className={styles.logout} onClick={() => console.log('Logging out...')}>Log Out</Link>
              </>
            ) 
            : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )
        }
      </nav>
    </header>
  );
};

export default Header;
