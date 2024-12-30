export type formValidationRules<T> = {
  [K in keyof T]: (...args: any[]) => any;
};
