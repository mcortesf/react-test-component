export interface ComboBoxProps {
  /**
   * ID
   */
  id?: string;

  /**
   * Nombre
   */
  name: string;

  /**
   * total values of checkboxes
   */
  options: any[] | undefined;

  disabled: boolean;

  /**
   * Método para evento change
   */
  onChange?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };

  /**
   * Método para evento blur
   */
  onBlur?: {
    (e: React.FocusEvent<any>): void;
    <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };

  /**
   * Label
   */
  label?: string;

  /**
   * Placeholder
   */
  placeholder?: string;

  /**
   * Errores
   */
  errors: string | undefined;

  /**
   * Indica si el input ha sido tocado
   */
  touched: boolean | undefined;

  /**
   * Clases CSS
   */
  className?: string;
}
