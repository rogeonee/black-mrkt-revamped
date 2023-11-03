import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';

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
