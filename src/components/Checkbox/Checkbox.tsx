import { CheckboxProps } from './CheckboxProps.interface';
import styles from './Checkbox.module.css';

export const Checkbox = ({
  id,
  value,
  name,
  values,
  disabled,
  onChange,
  label,
  placeholder,
  errors,
  touched,
  className,
}: CheckboxProps) => {
  const showError = !!touched && !!errors;

  return (
    <article className={`${styles.container} ${className}`}>
      <input
        id={id}
        className={`${styles.input} ${showError ? styles.input__error : ''}`}
        type="checkbox"
        placeholder={placeholder}
        name={name}
        value={value}
        checked={values?.includes(value)}
        onChange={event => onChange(event)}
        disabled={disabled}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </article>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  onClick: () => {},
};
