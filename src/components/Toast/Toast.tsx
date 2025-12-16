import { useEffect, useState } from 'react';
import type { ToastProps } from './Toast.types';
import './Toast.css';

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  closable = false,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  return (
    <div className={`toast ${type} ${visible ? 'show' : ''}`}>
      <span>{message}</span>
      {closable && (
        <button className={`toast-close ${visible ? 'show' : ''}`} onClick={handleClose}>
          ✖
        </button>
      )}
    </div>
  );
};
