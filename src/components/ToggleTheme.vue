<script setup lang="ts">
const isDark = useDark({ disableTransition: false })

const toggleTheme = () => {
    isDark.value = isDark.value ? false : true;
}

</script>

<template>
    <WidgetsButton t="点击切换主题" ic="i-ri-sun-line dark:i-ri-moon-line" @click="toggleTheme"></WidgetsButton>
</template>
