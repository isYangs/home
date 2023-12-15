<script setup lang="ts">
const title = useTitle('一个不知名的引导页')
const isLeave = usePageLeave()

watch(isLeave, (newVal) => {
  if (newVal) {
    title.value = '记得常来看看，过段时间可以就不一样了';
  } else {
    title.value = '哇，这是谁啊，三生有幸在此相遇';
  }
});
</script>

<template>
  <Index />
</template>

<style scoped></style>
