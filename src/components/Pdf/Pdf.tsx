import { Button } from '../Button/Button';
import styles from './Pdf.module.css';
import { PdfProps } from './PdfProps.interface';

export const Pdf = ({ children, name, type, base64File }: PdfProps) => {
  const getLinkPdf = () => {
    const linkPdf = `data:application/pdf;base64,${base64File}`;
    return linkPdf;
  };
  const downloadPDF = () => {
    const downloadLink = document.createElement('a');
    const fileName = `${name}${new Date().getTime()}.pdf`;

    downloadLink.href = getLinkPdf();
    downloadLink.download = fileName;
    downloadLink.click();
  };

  if (type === 'view') {
    return (
      <section>
        <iframe style={{ width: '563px', height: '666px' }} src={getLinkPdf()} title="title" />
      </section>
    );
  }
  if (type === 'download') {
    return (
      <section>
        <Button onClick={downloadPDF}>{children}</Button>
      </section>
    );
  }
  return (
    <section>
      <span className={`${styles.error}`}>Tipo desconocido</span>
    </section>
  );
};
