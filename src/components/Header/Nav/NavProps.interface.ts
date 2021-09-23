import { HeaderMenuItem } from '../Header.interfaces';

export interface NavProps {
  /**
   * Class name
   */
  className?: string;

  /**
   * Menu items
   */
  items: HeaderMenuItem[];
}
