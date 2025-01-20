<script setup lang="ts">
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton.vue';
</script>

<template>
    <div class="main">
        <div class="jumbotron">
            <h1>Bem vindo à Akademika</h1>
            <h2>Estude do seu jeito, no seu ritmo.</h2>
            <p>mantenha seus estudos sob seu controle, sem dores de cabeça.</p>
            <PrimaryButton class="button" text="Comece agora" />
        </div>
        <img id="light-illustration" src="../../assets/illustration.svg" alt="student illustration">
        <img id="dark-illustration" src="../../assets/darkIllustration.svg" alt="student illustration">
        <img id="cloud-illustration" src="../../assets/cloud .svg" alt="cloud illustration">
        <a id="scroll-down" href="#"><img id="chevron-icon" src="../../assets/chevron.svg" alt="chevron icon"></a>
    </div>
</template>

<style scoped>
h1 {
  font-family: 'Kenao', 'Raleway', sans-serif;
  margin-bottom: 0;
  font-size: calc(1.5em + 2vw);
}

h2 {
  font-weight: 300;
  font-size: calc(0.8em + 0.8vw);
}

p {
  font-size: calc(0.6em + 0.6vw);
  margin-bottom: 32px;
}

#scroll-down {
  width: fit-content;
  height: fit-content;
  margin-left: -8vw;
  margin-top: 5vh;
}

#light-illustration {
  display: none;
}

#dark-illustration {
  filter: invert();
  position: relative;
  z-index: -1;
}

#cloud-illustration {
  width: calc(120px + 15vw);
  margin-left: -25vw;
  margin-top: -10vh;
}

#chevron-icon {
  width: calc(32px + 3vw);
}

img {
  width: calc(160px + 15vw);
  user-select: none;
}

.main {
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1em;
  margin-left: 15vw;
  margin-right: 5vw;
}

.jumbotron {
  text-align: left;
}

@media (prefers-color-scheme: light) {
  #dark-illustration {
    display: none;
  }

  #light-illustration {
    display: inherit;
    filter: none;
  }
}

@media (max-width: 768px) {
  .main {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 1vh;
    margin-right: 15vw;
    margin-left: 15vw;
  }

  .jumbotron {
    text-align: left;
  }

  #scroll-down {
    margin: 0 auto;
  }

  #cloud-illustration {
    display: none;
  }
}
</style>
