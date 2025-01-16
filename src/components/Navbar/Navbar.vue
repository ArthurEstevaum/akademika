<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <div class="separator">
            <img src="../../assets/logo.svg" alt="Akademika logo" class="logo">
            <section class="link-group">
                <RouterLink to="/">Início</RouterLink>
                <RouterLink to="/subject/create">Disciplinas</RouterLink>
            </section>
        </div>
    </nav>
</template>

<style scoped>
    .link-group {
        min-width: calc(180px + 15vw);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: calc(0.8rem + 0.3vw);
    }
    .separator {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

.logo {
    width: calc(64px + 2vw);
    will-change: filter;
    transition: filter 300ms;
    margin-left: 6vw;
}

.logo:hover {
  filter: drop-shadow(0 0 0.2em var(--blue));
}
</style>
