import styles from './Input.module.css';
import { InputProps } from './InputProps.interface';

export const Input = ({
  id,
  value,
  name,
  type,
  onChange,
  onBlur,
  label,
  placeholder,
  disabled,
  errors,
  touched,
  className,
  blockCopy,
  blockCut,
  blockPaste,
}: InputProps) => {
  const changeHandler = (event: any) => {
    onChange(event);
  };

  const blurHandler = (event: any) => {
    onBlur(event);
  };

  const copyHandler = (event: any) => {
    if (blockCopy) {
      event.preventDefault();
    }
  };

  const pasteHandler = (event: any) => {
    if (blockPaste) {
      event.preventDefault();
    }
  };

  const cutHandler = (event: any) => {
    if (blockCut) {
      event.preventDefault();
    }
  };

  const showError = !!touched && !!errors;
  const errorsView = showError ? errors : '';

  return (
    <article className={`${styles.container} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`${styles.input} ${showError ? styles.input__error : ''}`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={event => changeHandler(event)}
        onBlur={event => blurHandler(event)}
        onCopy={event => copyHandler(event)}
        onPaste={event => pasteHandler(event)}
        onCut={event => cutHandler(event)}
        disabled={disabled}
        value={value}
      />
      <p className={styles.error}>{errorsView}</p>
    </article>
  );
};

Input.defaultProps = {
  blockCopy: false,
  blockCut: false,
  blockPaste: false,
  type: 'text',
  disabled: false,
  onClick: () => {},
  onBlur: () => {},
};
