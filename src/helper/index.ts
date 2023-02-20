import { DIGITS, OPERATORS } from "../constants";

export const isDigit = (digit: string) => {
  return DIGITS.includes(digit);
};

export const isOperator = (operator: string) => {
  return OPERATORS.includes(operator);
};

export const lastCharIsOperator = (string: string) => {
  const stringNormalized = string.replace(/\s/g, "");
  return isOperator(stringNormalized[stringNormalized.length - 1]);
};
