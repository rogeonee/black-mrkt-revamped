import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/FormContainer.module.css';

const LoginPage = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>Login</div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
