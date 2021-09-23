import styles from './Nav.module.css';
import { NavItem } from './NavItem/NavItem';
import { NavProps } from './NavProps.interface';

export const Nav = ({ className, items }: NavProps) => (
  <nav className={`${className} ${styles.nav}`} role="navigation">
    {items.map(item => (
      <NavItem headerMenuItem={item} key={`nav-item-${item.name}`} />
    ))}
  </nav>
);
