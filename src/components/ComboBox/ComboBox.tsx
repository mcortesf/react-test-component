import React from 'react';
import styles from './ComboBox.module.css';
import { ComboBoxProps } from './ComboBoxProps.interface';
import { ListProps } from './ListProps.interface';

export const ComboBox = ({ id, name, options, disabled, onChange, placeholder, errors, touched }: ComboBoxProps) => {
  const changeHandler = (event: any) => {
    console.log(event.target.value);
    if (onChange) {
      onChange(event);
    }
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  };
  const clear = (event: any) => {
    const ev = event;
    ev.target.value = '';
  };
  const showError = !!touched && !!errors;
  return (
    <section className={styles.container}>
      <input
        id={id}
        name={name}
        className={`${styles.box} ${showError ? styles.input__error : ''}`}
        type="input"
        list="cuentas"
        onChange={event => changeHandler(event)}
        onClick={event => clear(event)}
        onFocus={event => clear(event)}
        placeholder={`--  ${placeholder}  --`}
        disabled={disabled}
      />
      <datalist id="cuentas">
        {options?.map((opts: ListProps) => (
          <option id={opts.id} key={opts.key}>
            {opts.value}
          </option>
        ))}
      </datalist>
    </section>
  );
};
