<script setup lang="ts">
defineProps<{ n: string, c: string, ic: string, t: string }>()

</script>

<template>
  <a class="btn select-none" :href="t" :title="n" :style="{ backgroundColor: c }" lt-md="my-2">
    <div :class="ic" class="mr2 w18px h18px" />
    <b class="text-truncate">{{ n }}</b>
  </a>
</template>

<style scoped>
.btn {
  padding: 0 50px;
  height: 50px;
  border-radius: 6px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
