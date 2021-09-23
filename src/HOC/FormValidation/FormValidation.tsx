/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
import React, { ReactNode } from 'react';
import * as Yup from 'yup';
import { validate as validateRut } from 'rut.js';

export const FormValidation = ({ children }: { children: ReactNode }) => {
  Yup.addMethod(Yup.string, 'rut', function (message: string) {
    return this.test('rut-test', message, rut => (rut ? validateRut(rut) : false));
  });

  Yup.addMethod(Yup.string, 'documentNumber', function (message: string) {
    return this.test('document-number-test', message, documentNumber => {
      if (documentNumber?.length === 10) {
        // de tipo A123123123
        const charPart = documentNumber.charAt(0);
        const numberPart = documentNumber.substr(1, documentNumber.length);
        if (charPart.toUpperCase() !== 'A') {
          return false;
        }
        if (Number.isNaN(Number(numberPart))) {
          return false;
        }
      } else if (documentNumber?.length === 9) {
        // de tipo 123123123
        if (Number.isNaN(Number(documentNumber))) {
          return false;
        }
      } else {
        return false;
      }
      return true;
    });
  });

  Yup.addMethod(Yup.string, 'equalTo', function (ref, msg) {
    return this.test({
      name: 'equalTo',
      exclusive: false,
      // eslint-disable-next-line no-template-curly-in-string
      message: msg || '${path} must be the same as ${reference}',
      params: {
        reference: ref.path,
      },
      test(value: any) {
        return value === this.resolve(ref);
      },
    });
  });
  return <>{children}</>;
};
