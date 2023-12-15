<script setup lang="ts">
defineProps<{ ic:string, t: string }>()
</script>

<template>
    <a class="widgets-btn" :title="t">
        <div :class="ic" />
    </a>
</template>

<style scoped></style>