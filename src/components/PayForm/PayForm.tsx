import { useFormik } from 'formik';

import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './PayForm.module.css';

interface FormValues {
  accountNumber: number | undefined;
}

export const PayForm = () => {
  const initialValues: FormValues = {
    accountNumber: undefined,
  };

  const onSubmit = (event: any) => {
    console.log(event);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      accountNumber: Yup.number()
        .typeError('Campo debe ser numérico')
        .required('Campo obligatorio')
        .moreThan(0, 'Número debe ser mayor a 0'),
    }),
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h3 className="title">Ingrese datos del cliente</h3>
      <p className="sub_header">Para pagar o conocer el monto adeudado ingresa el nº de cliente</p>
      <Input
        id="accountNumber"
        name="accountNumber"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.accountNumber}
        errors={formik.errors.accountNumber}
        touched={formik.touched.accountNumber}
        placeholder="Ej: 123456789"
        label="Nº de cliente"
        blockPaste
      />
      <p className="sub_header">
        Si no conoces el nº de cliente haz clic <a href="/">AQUÍ</a>
      </p>
      <Button type="submit">PAGAR</Button>
    </form>
  );
};
