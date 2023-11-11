import React from 'react';
import RegisterForm from '../components/RegisterForm';
import styles from '../styles/FormContainer.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>Register</div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
