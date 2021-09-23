import { HeaderMenuItem, HeaderProps } from './Header.interfaces';
import styles from './Header.module.css';

export const Header = ({ className, history }: HeaderProps) => {
  const menu: HeaderMenuItem[] = [
    {
      name: 'Servicios en linea',
      items: [
        { name: 'Pago de cuenta', link: '' },
        { name: 'Aviso de corte', link: '' },
        { name: 'Contratación servicio', link: '' },
      ],
    },
    {
      name: 'Información útil',
      items: [
        { name: 'Avisos de corte', link: '' },
        { name: 'Ahorro de luz', link: '' },
        { name: 'Cuidado de productos', link: '' },
        { name: 'Sustentabilidad', link: '' },
      ],
    },
    {
      name: 'Empresa',
      link: '',
    },
    {
      name: 'Ayuda',
      link: '/help',
    },
  ];

  const navigateToTodo = () => {
    console.log('Navegando');
    history.push('/todo');
  };

  const parentStyles = className || '';
  return (
    <header className={`${parentStyles} ${styles.header_container}`}>
      {/* <section className={`${styles.header} wrapper`}>
        <Link to="/">
          <figure className={`${styles.logo} pointer`}>
            <img className={styles.logo_img} src={logo} alt="Logo SAESA" />
          </figure>
        </Link>
        <Nav items={menu} />
        <Button className={`${styles.button_spacer}`}>Pagar</Button>
        <Button className={`${styles.button_spacer}`} color="blue">
          Mi Saesan
        </Button>
        <Button onClick={navigateToTodo}>TODO</Button>
      </section> */}
    </header>
  );
};
