<script setup lang="ts">
    const model = defineModel({ required: true })
    defineOptions({
        inheritAttrs: false
    })
    defineProps<{
        inputId: string,
        labelText: string,
    }>()
</script>

<template>
    <div>
        <label :for="inputId">{{ labelText }}</label>
        <input v-bind="$attrs" v-model="model" type="text" :id="inputId">
    </div>
</template>

<style scoped>

label {
    font-size: 1.5rem;
    display: block;
}

input {
    width: 100%;
    padding: 16px 20px;
    margin: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

input::placeholder {
    font-size: 1.2rem;
}

div {
    margin-top: 24px;
    text-align: left;
}
</style>