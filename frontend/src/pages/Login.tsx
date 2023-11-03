// pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Dummy validation
    if (username === 'admin' && password === 'password') {
      setError('');
      navigate('/home'); // Navigate to home page on successful login
    } else {
      setError('Invalid credentials!');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>Login</div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.loginInput}
          />
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
