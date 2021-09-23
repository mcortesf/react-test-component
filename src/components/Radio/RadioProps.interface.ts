export interface RadioProps {
  /**
   * ID
   */
  id: string;

  /**
   * Valor
   */
  value: any;

  /**
   * Nombre
   */
  name: string;

  /**
   * total values of checkboxes
   */
  values: any | undefined;

  /**
   * Disabled
   */
  disabled: boolean;

  /**
   * Método para evento change
   */
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
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
