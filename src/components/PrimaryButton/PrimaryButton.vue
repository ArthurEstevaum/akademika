<script setup lang="ts">
    defineProps<{ text: string, disabled?: boolean }>()
</script>

<template>
    <button :disabled="disabled">
        {{ text }}
    </button>
</template>

<style scoped>
    button {
        padding: 15px;
        border-radius: 12px;
        background-color: var(--blue);
        color: var(--white);
    }
</style>
