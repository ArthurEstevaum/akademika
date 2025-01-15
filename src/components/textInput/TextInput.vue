<script setup lang="ts">
    const model = defineModel({ required: true })
    defineOptions({
        inheritAttrs: false
    })
    const props = defineProps<{
        inputId: string,
        labelText: string,
        error?: string,
    }>()
</script>

<template>
    <div>
        <label :for="inputId">{{ labelText }}</label>
        <input :class="{ errorRing: props.error }" v-bind="$attrs" v-model="model" type="text" :id="inputId">
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
    margin: 16px 0;
    font-size: 1.1rem;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #121212;
    box-shadow: 0 12px 18px -1px rgba(0, 0, 0, 0.185), 0 6px 12px -2px rgba(0, 0, 0, 0.158);
}

input:focus {
    outline: 3px solid var(--blue);
    border-color: rgba(0, 0, 255, 0);
}

input::placeholder {
    font-size: 1.2rem;
}

input.errorRing {
    outline: 3px solid rgba(255, 0, 0, 0.575);
}

div {
    margin-top: 24px;
    text-align: left;
}

@media (prefers-color-scheme: light) {
    input {
        background-color: var(--off-white);
    }
}
</style>