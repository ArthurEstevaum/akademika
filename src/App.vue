<script setup lang="ts">
import { reactive } from 'vue';
import { days } from './types/subject';
import HelloWorld from './components/HelloWorld.vue'
import HoraryInput from './components/horaryInput/HoraryInput.vue';
import TextInput from './components/textInput/TextInput.vue';
import RadioInput from './components/RadioInput/RadioInput.vue'
import useFormValidation from './composables/useFormValidation';
import PrimaryButton from './components/PrimaryButton/PrimaryButton.vue';

const form: { text: string, horary: Array<days>, state: "cursando" | "aprovado" | "não iniciado"} = reactive({
  text: '',
  horary: [],
  state: "não iniciado"
})
type formValidationType = {
  validateField: Function,
  errors: {
    text: string,
    horary: string,
    state: string,
  },
}
const { validateField, errors } : formValidationType = useFormValidation({
  text: (value: string) => value.length !== 0? true : "Campo Obrigatório",
  horary: (value: days[]) => value.length !== 0? true : "Campo obrigatório",
})
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="./assets/logo.svg" class="logo" alt="akademika logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <HoraryInput :error="errors.horary" @updated-days-picked="(horaryList: Array<days>) => {
    form.horary = horaryList
    validateField('horary', horaryList)
    }" />
  <p v-if="errors.horary" :style="{ color: errors.horary? 'red' : 'inherit' }">{{ errors.horary }}</p>
  <TextInput :error="errors.text" @input="validateField('text', $event.target.value)" v-model="form.text" input-id="textInput" label-text="Teste de input" placeholder="Digite aqui" />
  <p v-if="errors.text" :style="{ color: errors.text? 'red' : 'inherit' }">{{ errors.text }}</p>
  <RadioInput label-text="cursando" radio-id="cursando" v-model="form.state" checked />
  <RadioInput label-text="aprovado" radio-id="aprovado" v-model="form.state" />
  <RadioInput label-text="não iniciado" radio-id="não iniciado" v-model="form.state" />
  <PrimaryButton text="Enviar Formulário" @click="console.log(form)" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.v-move,
.v-enter-active,
.v-leave-active {
  transition: 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
