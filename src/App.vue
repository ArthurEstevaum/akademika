<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>
<style scoped>
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
