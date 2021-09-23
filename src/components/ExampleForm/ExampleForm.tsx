import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { ComboBox } from '../ComboBox/ComboBox';
import { ListProps } from '../ComboBox/ListProps.interface';
import { Input } from '../Input/Input';
import { Pdf } from '../Pdf/Pdf';
import { Radio } from '../Radio/Radio';
import { TextArea } from '../TextArea/TextArea';
import { Tooltip } from '../Tooltip/Tooltip';
import styles from './ExampleForm.module.css';

interface FormValues {
  username: string | undefined;
  rut: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirmation: string | undefined;
  checkboxExample: string[] | undefined;
  radioExample: string | undefined;
  comboBoxExample: string[] | undefined;
  textarea: string | undefined;
}

export const ExampleForm = () => {
  const { t } = useTranslation();

  const initialValues: FormValues = {
    username: undefined,
    rut: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
    checkboxExample: [],
    radioExample: '',
    comboBoxExample: [],
    textarea: undefined,
  };

  const onSubmit = (event: any) => {
    console.log(event);
  };

  const [varShow, setStyle] = useState('hidden');

  const options: ListProps[] = [
    { id: '1', key: '1', value: 'Cuenta Personal' },
    { id: '2', key: '2', value: 'Cuenta Empresa' },
    { id: '3', key: '3', value: 'Cuenta Externa' },
    { id: '4', key: '4', value: 'Cuenta Interna' },
    { id: '5', key: '5', value: 'Sin cuenta' },
  ];

  const base64File =
    'JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==';

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      username: Yup.string().required('Campo obligatorio'),
      email: Yup.string().required('Campo obligatorio'),
      rut: Yup.string().rut('Ingrese un RUT válido').required('Campo obligatorio'),
      password: Yup.string().required('Campo obligatorio'),
      passwordConfirmation: Yup.string().equalTo(Yup.ref('password'), 'Las contraseñas deben coincidir').required('Campo obligatorio'),
      checkboxExample: Yup.array(),
      radioExample: Yup.string(),
      comboBoxExample: Yup.string(),
      textarea: Yup.string().required('Campo obligatorio'),
    }),
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      {/* <h2>{t('title')}</h2> */}
      <h2>Catalogo de autos</h2>
      <h3
        className="title"
        onMouseEnter={() => {
          setStyle('show');
        }}
        onMouseLeave={() => {
          setStyle('hidden');
        }}
      >
        {t('exampleForm:title')}
      </h3>
      <Tooltip visible={varShow}>Este es un formulario de ejemplo</Tooltip>
      <Input
        id="username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        errors={formik.errors.username}
        touched={formik.touched.username}
        placeholder="Ej: abc"
        label="Nombre de usuario"
        className={styles.input_field}
        disabled
      />
      <Input
        id="rut"
        name="rut"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rut}
        errors={formik.errors.rut}
        touched={formik.touched.rut}
        placeholder="Ej: 123456789-0"
        label="RUT"
        className={styles.input_field}
      />
      <Input
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errors={formik.errors.email}
        touched={formik.touched.email}
        placeholder="Ej: abc@abc.cl"
        label="Correo electrónico"
        className={styles.input_field}
      />
      <Input
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errors={formik.errors.password}
        touched={formik.touched.password}
        type="password"
        label="Contraseña"
        className={styles.input_field}
      />
      <Input
        id="passwordConfirmation"
        name="passwordConfirmation"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordConfirmation}
        errors={formik.errors.passwordConfirmation}
        touched={formik.touched.passwordConfirmation}
        type="password"
        label="Reingresar contraseña"
        className={styles.input_field}
      />
      <fieldset className={styles.fieldset}>
        <p className={styles.fielset_label}>Color favorito</p>
        <Checkbox
          id="example-checkbox-green"
          className={styles.input_field}
          value="green"
          name="checkboxExample"
          values={formik.values.checkboxExample}
          onChange={formik.handleChange}
          errors={formik.errors.checkboxExample}
          touched={formik.touched.checkboxExample}
          label="Verde"
        />
        <Checkbox
          id="example-checkbox-red"
          className={styles.input_field}
          value="red"
          name="checkboxExample"
          values={formik.values.checkboxExample}
          onChange={formik.handleChange}
          errors={formik.errors.checkboxExample}
          touched={formik.touched.checkboxExample}
          label="Rojo"
          disabled
        />
        <Checkbox
          id="example-checkbox-blue"
          className={styles.input_field}
          value="blue"
          name="checkboxExample"
          values={formik.values.checkboxExample}
          onChange={formik.handleChange}
          errors={formik.errors.checkboxExample}
          touched={formik.touched.checkboxExample}
          label="Azul"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <p className={styles.fielset_label}>¿Te gusta la pizza con piña?</p>
        <Radio
          id="example-radio-yes"
          className={styles.input_field}
          value="yes"
          name="radioExample"
          values={formik.values.radioExample}
          onChange={formik.handleChange}
          errors={formik.errors.radioExample}
          touched={formik.touched.radioExample}
          label="Si"
        />
        <Radio
          id="example-radio-no"
          className={styles.input_field}
          value="no"
          name="radioExample"
          values={formik.values.radioExample}
          onChange={formik.handleChange}
          errors={formik.errors.radioExample}
          touched={formik.touched.radioExample}
          label="No"
          disabled
        />
        <ComboBox
          label="Tipo cuentas enroladas"
          className={styles.input_field}
          name="comboBoxExample"
          onChange={formik.handleChange}
          errors={formik.errors.comboBoxExample}
          touched={formik.touched.comboBoxExample}
          options={options}
          placeholder="Seleccione una Cuenta"
          disabled={false}
        />
      </fieldset>
      <TextArea
        id="textarea"
        name="textarea"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.textarea}
        className={styles.input_field}
        errors={formik.errors.textarea}
        touched={formik.touched.textarea}
        placeholder="Ej: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        label="Nº de cliente"
        disabled
      />
      <Button type="submit" disabled>
        PAGAR
      </Button>
      <Pdf type="download" base64File={base64File} name="sample">
        Descargar Pdf
      </Pdf>
    </form>
  );
};
