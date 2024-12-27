<script setup lang="ts">
import { reactive } from 'vue';
import { days } from './types/subject';
import HelloWorld from './components/HelloWorld.vue'
import HoraryInput from './components/horaryInput/HoraryInput.vue';
import TextInput from './components/textInput/TextInput.vue';
import useFormValidation from './composables/useFormValidation';

const form: { text: string, horary: Array<days> } = reactive({
  text: '',
  horary: []
})
type formValidationType = {
  validateField: Function,
  errors: typeof form
}
const { validateField, errors } : formValidationType = useFormValidation({
  text: (value: string) => value.length !== 0? true : "Campo Obrigatório",
  horary: (value: days[]) => value.length !== 0? true : "Campo obrigatório"
})
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <HoraryInput error="" @updated-days-picked="(horaryList: Array<days>) => {
    form.horary = horaryList
    validateField('horary', horaryList)
    }" />
    <p v-if="errors.horary">{{ errors.horary }}</p>
  <TextInput @input="validateField('text', $event.target.value)" v-model="form.text" input-id="textInput" label-text="Teste de input" placeholder="Digite aqui" />
  <p v-if="errors.text">{{ errors.text }}</p>
  <button>Enviar formulário</button>
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
