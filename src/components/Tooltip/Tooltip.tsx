import style from './Tooltip.module.css';
import { TooltipProps } from './TooltipProps.interface';

export const Tooltip = ({ visible, children }: TooltipProps) => (
  <section className={`${style.principal} ${style[visible]}`}>
    <div className={style.arrow} />
    <div className={style.secondary}>{children}</div>
  </section>
);
