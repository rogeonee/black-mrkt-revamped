import React, { useState } from 'react';
import styles from '../styles/RegisterForm.module.css';
import InputField from './InputField';
import { Link } from 'react-router-dom';


const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    // Further registration logic here...
    setError('');
    console.log('Registered successfully');
  };

  return (
    <form onSubmit={handleRegister} className={styles.registerForm}>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className={styles.registerButton}>Register</button>
      <div className={styles.buttonGroup}>
        Already have an account?<Link to="/login" className={styles.loginLink}>Log in</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
