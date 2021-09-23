import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps.interface';

export const Button = ({ color, className, onClick, type, children, disabled }: ButtonProps) => {
  const classColor = color ? `button-${color}` : '';
  const parentClass = className || '';
  return (
    <button
      className={`${parentClass} ${styles.button} ${styles[`${classColor}`]}`}
      onClick={event => onClick(event)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'blue',
  disabled: false,
  type: 'button',
  onClick: () => {},
};
