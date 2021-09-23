import styles from './Radio.module.css';
import { RadioProps } from './RadioProps.interface';

export const Radio = ({ id, value, name, values, disabled, onChange, label, placeholder, errors, touched, className }: RadioProps) => {
  const changeHandler = (event: any) => {
    onChange(event);
  };

  const showError = !!touched && !!errors;

  const checked = values?.includes(value);

  return (
    <article className={`${styles.container} ${className}`}>
      <input
        id={id}
        className={`${styles.input} ${showError ? styles.input__error : ''}`}
        type="radio"
        placeholder={placeholder}
        name={name}
        value={value}
        checked={checked}
        onChange={event => changeHandler(event)}
        disabled={disabled}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </article>
  );
};

Radio.defaultProps = {
  disabled: false,
  onClick: () => {},
};
