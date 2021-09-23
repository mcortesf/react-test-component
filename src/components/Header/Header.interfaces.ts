export interface HeaderMenuItem {
  /**
   * Name
   */
  name: string;

  /**
   * Link
   */
  link?: string;

  /**
   * Items
   */
  items?: HeaderMenuItem[];
}

export interface HeaderProps {
  /**
   * Class name
   */
  className?: string;

  /**
   * Router history element
   */
  // TODO: Encontrar tipo de elemento para definición de typescript
  history?: any;
}
