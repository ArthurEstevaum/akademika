<script setup lang="ts">
import { reactive, ref } from 'vue';
import { days } from '../../types/subject';
    const props = defineProps<{
        error?: string
    }>()
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
    <section :class="{ errorRing: props.error }">
        <div :class="{ active: styles.days['Segunda-feira'], errorRing: props.error }" name="segunda-feira" id="segunda-feira" @click="togglePickedDay('Segunda-feira')">Segunda-feira</div>
        <div :class="{ active: styles.days['Terca-feira'], errorRing: props.error }" name="Terca-feira" id="terca-feira" @click="togglePickedDay('Terca-feira')">Terça-feira</div>
        <div :class="{ active: styles.days['Quarta-feira'], errorRing: props.error }" name="Quarta-feira" id="quarta-feira" @click="togglePickedDay('Quarta-feira')">Quarta-feira</div>
        <div :class="{ active: styles.days['Quinta-feira'], errorRing: props.error }" id="quinta-feira" @click="togglePickedDay('Quinta-feira')">Quinta-feira</div>
        <div :class="{ active: styles.days['Sexta-feira'], errorRing: props.error }" name="Sexta-feira" id="sexta-feira" @click="togglePickedDay('Sexta-feira')">Sexta-feira</div>
        <div :class="{ active: styles.days['Sábado'], errorRing: props.error }" name="Sábado" id="sabado" @click="togglePickedDay('Sábado')">Sábado</div>
    </section>

</template>
   
<style scoped>
    div.active {
        background-color: var(--blue);
        transition: 500ms ease-in-out;
    }
    div {
        font-weight: 500;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 15px;
        border-right: 1px solid var(--white);
        transition: 500ms ease-in-out;
    }
    section {
        display: flex;
        border: 2px solid var(--white);
        border-radius: 16px;
        overflow: hidden;
    }

    section.errorRing {
        
        outline: 3px solid rgba(255, 0, 0, 0.575);
        border: none;
    }

    div.errorRing {
        border-right: 1px solid rgba(255, 0, 0, 0.575);
    }

    div:last-child {
        border-right: none;
    }

    @media (prefers-color-scheme: light) {
        section {
            border-color: var(--blue);
        }

        div {
            border-color: var(--blue);
            color: var(--gray);
        }

        div.active {
            color: var(--white);
        }
    }

    @media (max-width: 605px) {
        section {
            flex-direction: column;
        }
        div {
            border-bottom: 1px solid;
            border-right: none;
        }
    }
</style>