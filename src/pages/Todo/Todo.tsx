import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AutosService from 'services/autos.services';
import * as Yup from 'yup';
import { Box, Header, Input } from '../../components';
import styles from './Todo.module.css';

interface FormValues {
  username: string | undefined;
}

const Todo = ({ history }: any) => {
  useEffect(() => {
    obtenerAutos();
  }, []);

  const initialValues: FormValues = {
    username: undefined,
  };

  const onSubmit = () => {};

  let [responseAutos, setResponseListAutos] = useState([]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      username: Yup.string().required('Campo obligatorio'),
    }),
  });

  const obtenerAutos = () => {
    AutosService.obtenerListadoAutos()
      .then(response => {
        setResponseListAutos(response);
      })
      .catch(error => {
        console.log('error autos', error);
      });
  };

  return (
    <section>
      <Header className={styles.header} history={history} />
      <main className="wrapper container_pt">
        <h1 className="title">TODO List</h1>
        <div className={`${styles.container_flex}`}>
          <Box className={`${styles.box}`}>
            <h2>Crear registro</h2>
            <Input
              errors={formik.errors.username}
              touched={formik.touched.username}
              label="Ingrese nombre"
              placeholder="Nombre"
              name="test"
              type="text"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          </Box>
          <Box className={`${styles.box}`}>
            <ul>
              <li>Nombre de ejemplo</li>
            </ul>
          </Box>
        </div>
        <ul className="autos">
          {responseAutos?.map((item: any) => {
            return (
              <li className="item" key={item.id}>
                {item.id}
              </li>
            );
          })}
        </ul>
        <button onClick={obtenerAutos}>BOTON DE PRUEBA</button>
      </main>
    </section>
  );
};

export default Todo;
