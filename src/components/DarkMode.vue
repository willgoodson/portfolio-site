<script setup>
    import { useDark, useToggle } from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>

<template>
    <button
        @click="toggleDark()"
        class="px-4 py2 font-mono dark:text-white rounded">
        <h1 v-if="isDark">Light Mode</h1>
        <h1 v-else="isDark">Dark Mode</h1>

    </button>

</template>