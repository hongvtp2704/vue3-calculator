<template>
  <button
    :class="classes"
    @keydown.enter.prevent
    @keydown.space.prevent
    class="w-16 h-16 rounded-full text-center text-xl m-auto"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
type IVariant = "primary" | "secondary" | "tertiary";
interface IProps {
  variant: IVariant;
}
const props = defineProps<IProps>();
const classes = ref<string>();

onBeforeMount(() => {
  const variantClasses = {
    primary: "bg-primary text-[#F0F0F0] hover:bg-secondary/30",
    secondary: "bg-secondary text-[#181818] hover:opacity-95",
    tertiary: "bg-tertiary text-[#F0F0F0] hover:opacity-95",
  };
  classes.value = variantClasses[props.variant];
});
</script>
