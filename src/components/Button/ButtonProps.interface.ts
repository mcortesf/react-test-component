import { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * Color
   */
  color: string;

  /**
   * Class name
   */
  className?: string;

  /**
   * Class name
   */
  onClick: (e: any) => void;

  /**
   * Class name
   */
  type: 'button' | 'submit' | 'reset' | undefined;

  /**
   * Class name
   */
  children?: string | ReactNode;

  /**
   * Class name
   */
  disabled: boolean;
}
