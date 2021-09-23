import 'yup';
declare module 'yup' {
  interface StringSchema {
    rut(rut: string): StringSchema;
    documentNumber(documentNumber: string): StringSchema;
    equalTo(ref: Ref, message?: string): StringSchema;
  }
}
