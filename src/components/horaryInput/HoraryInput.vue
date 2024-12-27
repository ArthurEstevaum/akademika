<script setup lang="ts">
import { reactive, ref } from 'vue';
import { days } from '../../types/subject';
    const daysPicked = ref<Array<days>>([])
    const styles = reactive({
        days: {
            "Segunda-feira": "",
            "Terca-feira": "",
            "Quarta-feira": "",
            "Quinta-feira": "",
            "Sexta-feira": "",
            "Sábado": ""
        }
    })
    const emit = defineEmits(['updatedDaysPicked'])
    function togglePickedDay(day: days) {
        const dayName = day
        if(!daysPicked.value.includes(dayName)) {
            daysPicked.value.push(dayName)
            styles.days[dayName] = "active"
            emit("updatedDaysPicked", daysPicked.value)
            return
        }
        daysPicked.value = daysPicked.value.filter((item) => item !== dayName)
        styles.days[dayName] = ""
        emit("updatedDaysPicked", daysPicked.value)
    }
</script>

<template>
    <section>
        <div :class="styles.days['Segunda-feira']" name="segunda-feira" id="segunda-feira" @click="togglePickedDay('Segunda-feira')">Segunda-feira</div>
        <div :class="styles.days['Terca-feira']" name="Terca-feira" id="terca-feira" @click="togglePickedDay('Terca-feira')">Terça-feira</div>
        <div :class="styles.days['Quarta-feira']" name="Quarta-feira" id="quarta-feira" @click="togglePickedDay('Quarta-feira')">Quarta-feira</div>
        <div :class="styles.days['Quinta-feira']" name="Quinta-feira" id="quinta-feira" @click="togglePickedDay('Quinta-feira')">Quinta-feira</div>
        <div :class="styles.days['Sexta-feira']" name="Sexta-feira" id="sexta-feira" @click="togglePickedDay('Sexta-feira')">Sexta-feira</div>
        <div :class="styles.days['Sábado']" name="Sábado" id="sabado" @click="togglePickedDay('Sábado')">Sábado</div>
    </section>

</template>
   
<style scoped>
    div.active {
        background-color: #0caeff67;
        transition: 500ms ease-in-out;
    }
    div {
        cursor: pointer;
        padding: 15px;
        border-right: 1px solid #fff;
        transition: 500ms ease-in-out;
    }
    section {
        display: flex;
        border: 2px solid #fff;
        border-radius: 20px;
        overflow: hidden;
    }

    .error {
        border: 1px solid red;
    }

    div:last-child {
        border-right: none;
    }
</style>