<script setup lang="ts">

const picked = defineModel();
const props = defineProps<{
    labelText: string,
    radioId: string
}>()

</script>

<template>
    <div>
        <input class="radio" type="radio" :value="radioId" :name="radioId" :id="radioId" v-model="picked">
        <label :for="props.radioId">{{ labelText }}</label>
    </div>
</template>

<style scoped>

</style>
