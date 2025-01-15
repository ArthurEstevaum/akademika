<script setup lang="ts">

const picked = defineModel();
defineOptions({
    inheritAttrs: false
})
const props = defineProps<{
    labelText: string,
    radioId: string
}>()

</script>

<template>
    <div>
        <input class="radio" type="radio" :value="radioId" :name="radioId" :id="radioId" v-model="picked" v-bind="$attrs">
        <label :for="props.radioId">{{ labelText }}</label>
    </div>
</template>

<style scoped>
input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.2em;
  height: 1.2em;
  border: 0.12rem solid var(--blue);
  border-radius: 50%;
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--blue);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

div {
    text-align: left;
    width: 32px;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    margin-top: 1rem;
}
</style>
