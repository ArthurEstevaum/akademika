<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const dropMenu = ref(false)
</script>

<template>
    <header>
        <nav>
            <div class="separator">
                <img src="../../assets/logo.svg" alt="Akademika logo" class="logo">
                <section class="link-group" :class="{ 'active': dropMenu }">
                    <RouterLink to="/">Início</RouterLink>
                    <RouterLink to="/subject/create">Disciplinas</RouterLink>
                </section>
                <section class="hamburger-section">
                    <button @click="() => dropMenu = !dropMenu">
                        <img v-if="dropMenu" class="icon" src="../../assets/x.svg" alt="close hamburger icon">
                        <img v-else="dropMenu" class="icon" src="../../assets/hamburger.svg" alt="hamburger icon">
                    </button>
                </section>
            </div>
        </nav>
    </header>
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

.icon {
    width: 22px;
    filter: invert(1);
}

.hamburger-section {
    display: none;
}

button {
    background-color: transparent;
    padding: 12px;
}


.logo:hover {
  filter: drop-shadow(0 0 0.2em var(--blue));
}

a {
    color: var(--white);
    padding-bottom: 8px;
}

@keyframes slide {
    0% { transform: translateX(100%); }
    100% { transform: translatex(0); }
}

@keyframes unslide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
}

@media (prefers-color-scheme: light) {
    a {
        color: var(--black);
    }

    .icon {
        filter: none;
    }
}

@media (max-width: 860px) {
    .link-group {
        display: none;
        font-size: calc(1rem + 0.4vw);
    }
    .link-group.active {
        animation: slide 0.5s forwards;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100vh;
        background-color: black;
    }

    .link-group.active ~ .hamburger-section {
        z-index: 101;
    }

    .link-group.active > a {
        margin-bottom: 12px;
        padding: 12px;
    }

    .hamburger-section {
        display: inherit;
        margin-right: 24px;
    }

    @media(prefers-color-scheme: light) {
        .link-group.active {
            background-color: var(--white);
        }
    }
}

.router-link-exact-active {
    color: var(--blue);
    border-bottom: 3px solid var(--blue);
}
</style>
