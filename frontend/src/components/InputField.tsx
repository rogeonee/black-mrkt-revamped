import React from 'react';
import styles from '../styles/InputField.module.css'; // Adjust path as needed

type InputFieldProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    );
  };

export default InputField;
