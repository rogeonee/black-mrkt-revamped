import React from 'react';
import LoginForm from '../components/LoginForm'; // Adjust path as needed
import styles from '../styles/Login.module.css'; // Adjust path as needed

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>Login</div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;