import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginForm.module.css';
import InputField from './InputField';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      setError('');
      navigate('/home');
    } else {
      setError('Invalid credentials!');
    }
  };

  const handleRegister = () => {
    console.log('Register clicked');
    navigate('/register');
  };

  const handlePassRecovery = () => {
    console.log('Password recovery clicked');
  };

  return (
    <form onSubmit={handleLogin} className={styles.loginForm}>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles.loginButton}>Login</button>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={handlePassRecovery} className={styles.secondaryButton}>
          Forgot Password?
        </button>
        <button type="button" onClick={handleRegister} className={styles.secondaryButton}>
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
