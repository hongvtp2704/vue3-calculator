<template>
  <Grid
    :rows="6"
    :cols="4"
    :gap="4"
    class="w-full bg-primary space-y-2 space-x-2 p-9 rounded"
  >
    <Screen
      class="col-span-4"
      :memory="calculatorStore.memory"
      :result="calculatorStore.result"
    />

    <Button variant="primary" @click="reset">AC</Button>
    <Button variant="primary" @click="negativeResult">+/-</Button>
    <Button variant="primary" @click="calculatePercentage">%</Button>
    <Button variant="secondary" @click="addOperator('/')">/</Button>

    <Button
      variant="primary"
      v-for="number in ['7', '8', '9']"
      :key="number"
      @click="addDigit(number)"
      >{{ number }}</Button
    >
    <Button variant="secondary" @click="addOperator('*')">X</Button>

    <Button
      variant="primary"
      v-for="number in ['4', '5', '6']"
      :key="number"
      @click="addDigit(number)"
      >{{ number }}</Button
    >
    <Button variant="secondary" @click="addOperator('-')">-</Button>

    <Button
      variant="primary"
      v-for="number in ['1', '2', '3']"
      :key="number"
      @click="addDigit(number)"
      >{{ number }}</Button
    >
    <Button variant="secondary" @click="addOperator('+')">+</Button>

    <Button variant="primary" @click="addDigit('0')">0</Button>
    <Button variant="primary" @click="addDigit('.')">.</Button>
    <div></div>
    <Button variant="tertiary" @click="calculateResult">=</Button>
  </Grid>
</template>

<script lang="ts" setup>
import Grid from "../components/Grid.vue";
import Screen from "../components/Screen.vue";
import Button from "../components/Button.vue";

import { useCalculatorStore } from "../stores";

const calculatorStore = useCalculatorStore();
const { addDigit, addOperator, calculateResult, calculatePercentage, negativeResult ,reset } = calculatorStore;
</script>
