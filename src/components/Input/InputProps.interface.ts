export interface InputProps {
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
   * Tipo de input
   */
  type: 'email' | 'file' | 'hidden' | 'image' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'text' | 'url';

  /**
   * Método para evento change
   */
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };

  /**
   * Método para evento blur
   */
  onBlur: {
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
   * Disabled
   */
  disabled: boolean;

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

  /**
   * Bloquear evento Copy
   */
  blockCopy?: boolean;

  /**
   * Bloquear evento Cut
   */
  blockCut?: boolean;

  /**
   * Bloquear evento Paste
   */
  blockPaste?: boolean;
}
