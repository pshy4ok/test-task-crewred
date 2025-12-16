import { useState } from 'react';
import type { InputProps } from './Input.types';
import './Input.css';

export const Input = ({
  type = 'text',
  value = '',
  placeholder = '',
  clearable = false,
  onChange,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.('');
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const hasTwoButtons = type === 'password' && clearable && inputValue;

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  const inputClass =
    type === 'password' && clearable
      ? 'input-field with-two-buttons'
      : type === 'password'
        ? 'input-field with-toggle'
        : clearable
          ? 'input-field with-clear'
          : 'input-field';

  return (
    <div className="input-wrapper">
      <input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        className={`input-field ${
          hasTwoButtons
            ? 'with-two-buttons'
            : type === 'password'
              ? 'with-toggle'
              : ''
        }`}
      />

      {type === 'password' && (
        <div className="toggle-btn-wrapper" onClick={togglePassword}>
          <span className={`toggle-icon ${showPassword ? 'show' : ''}`}>
            🙈
          </span>
          <span className={`toggle-icon ${!showPassword ? 'show' : ''}`}>
            🙉
          </span>
        </div>
      )}

      {clearable && (
        <button
          type="button"
          className={`clear-btn ${inputValue ? 'show' : ''}`}
          onClick={handleClear}
        >
          ❌
        </button>
      )}
    </div>
  );
};
