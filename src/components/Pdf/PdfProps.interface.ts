import { ReactNode } from 'react';

export interface PdfProps {
  /**
   * Class name
   */
  children?: string | ReactNode;
  /**
   * Name
   */
  name: string;
  /**
   * Class name
   */
  type: 'view' | 'download' | undefined;
  /**
   * File as Base 64
   */
  base64File: string;
}
