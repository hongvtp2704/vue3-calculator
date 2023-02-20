<template>
  <div :class="`grid grid-rows-${rows} grid-cols-${cols} gap-${gap}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  rows: number;
  cols: number;
  gap: number;
}
defineProps<IProps>();
</script>
