import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HeaderMenuItem } from '../../Header.interfaces';
import styles from './NavItem.module.css';
import { NavItemProps } from './NavItemProps.interface';

export const NavItem = ({ headerMenuItem }: NavItemProps) => {
  const subMenuItems = (items: HeaderMenuItem[]): ReactNode => (
    <ul className={styles.dropdown}>
      {items.map(dropdownItem => (
        <li className={styles.dropdown_item} key={`dropdown-${dropdownItem.name}`}>
          <Link className={styles.dropdown_item_link} title={dropdownItem.name} to={dropdownItem.link || ''}>
            {dropdownItem.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const item =
    !!headerMenuItem?.items && headerMenuItem?.items.length > 0 ? (
      <article className={`${styles.nav_item} ${styles.nav_item__dropdown}`}>
        <Link className={styles.header_link} title={headerMenuItem.name} to={headerMenuItem.link || ''}>
          {headerMenuItem.name}
        </Link>
        {subMenuItems(headerMenuItem.items)}
      </article>
    ) : (
      <article className={styles.nav_item}>
        <a className={styles.header_link} href={headerMenuItem.link} title={headerMenuItem.name}>
          {headerMenuItem.name}
        </a>
      </article>
    );
  return item;
};

NavItem.defaultProps = {
  link: '',
};
