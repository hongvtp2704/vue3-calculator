<template>
  <div class="my-8 text-right break-all">
    <p class="text-5xl mb-4 text-white">{{ result }}</p>
    <p class="text-2xl font-semibold text-gray">{{ memory }}</p>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  memory: string;
  result: number;
}

defineProps<IProps>();
</script>
