import styles from './Box.module.css';
import { BoxProps } from './BoxProps.interface';

export const Box = ({ className, children }: BoxProps) => {
  const parentClass = className || '';
  return <div className={`${parentClass} ${styles.content} `}>{children}</div>;
};
