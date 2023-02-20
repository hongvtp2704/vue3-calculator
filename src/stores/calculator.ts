import { defineStore } from "pinia";
import { isDigit, isOperator, lastCharIsOperator } from "../helper";

type Operator = "/" | "*" | "+" | "-" | null;

interface IState {
  memory: string;
  operator: Operator;
  result: number;
  clearOnNextDigit: boolean;
}

export const useCalculatorStore = defineStore("calculator", {
  state: (): IState => {
    return {
      memory: "0",
      operator: null,
      result: 0,
      clearOnNextDigit: false,
    };
  },

  getters: {},

  actions: {
    addDigit(digit: string) {
      if (!isDigit(digit)) {
        throw new Error("Invalid param, is not a valid digit");
      }

      const lastDigit = this.memory[this.memory.length - 1];

      if (lastDigit === "." && digit === ".") return;
      if(this.memory.includes('.') && digit === '.') return;
      if (lastDigit === "0" && this.memory.length === 1) this.memory = ""; //erase first 0

      this.memory += `${digit}`;
    },

    addOperator(operator: string) {
      if (!isOperator(operator)) {
        throw new Error("Invalid param, is not a valid operator");
      }

      if (!this.memory && operator !== "-") return;
      if (lastCharIsOperator(this.memory)) {
        this.memory = this.memory.slice(0, this.memory.length - 1); //erase last
      }

      this.memory += `${operator}`;
    },

    calculateResult() {
      if (!this.memory) return;

      this.result = eval(this.memory);
    },

    calculatePercentage(){
      this.calculateResult();

      if (!this.result) return;
      this.result = this.result / 100;
      this.memory = this.result.toString();
    },

    negativeResult(){
      this.calculateResult();

      if(!this.result) return;
      this.result = -(this.result);
      this.memory = this.result.toString();
    },

    reset() {
      this.memory = "0";
      this.result = 0;
    },
  },
});
