import React, { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Modal.module.css';
import { ModalProps } from './ModalProps.interface';

export const Modal = ({ children }: ModalProps) => {
  const [checked, setBool] = useState(true);
  const toggleChecked = () => setBool(value => !value);
  return (
    <section className={`${styles.modal} ${styles[checked === true ? 'true' : 'false']}`}>
      <section className={`${styles.content}`}>
        <div className={`${styles.close}`}>
          <Button onClick={toggleChecked}>X</Button>
        </div>
        <div>{children}</div>
        <div>
          <Button color="blue">Aceptar</Button>
          <Button onClick={toggleChecked}>Cancelar</Button>
        </div>
      </section>
    </section>
  );
};
