import styles from './TextArea.module.css';
import { TextAreaProps } from './TextAreaProps.interface';

export const TextArea = ({
  id,
  value,
  name,
  disabled,
  onChange,
  onBlur,
  label,
  placeholder,
  errors,
  touched,
  className,
  blockCopy,
  blockCut,
  blockPaste,
}: TextAreaProps) => {
  const changeHandler = (event: any) => {
    if (onChange) {
      onChange(event);
    }
  };

  const blurHandler = (event: any) => {
    if (onBlur) {
      onBlur(event);
    }
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
      <label className={styles.title} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        name={name}
        onChange={event => changeHandler(event)}
        onBlur={event => blurHandler(event)}
        onCopy={event => copyHandler(event)}
        onPaste={event => pasteHandler(event)}
        onCut={event => cutHandler(event)}
        value={value}
        disabled={disabled}
      />
      <p className={styles.error}>{errorsView}</p>
    </article>
  );
};

TextArea.defaultProps = {
  blockCopy: false,
  blockCut: false,
  blockPaste: false,
  disabled: false,
  onClick: () => {},
  onBlur: () => {},
};
