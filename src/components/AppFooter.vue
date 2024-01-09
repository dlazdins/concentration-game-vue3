<script setup>
import { ref, computed } from 'vue';

const version = ref('1.0.0');
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer>
    <div class="container">
      <p>Website Version: {{ version }}</p>
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 100px;
  color: $primary-white;
  background-color: $primary-violet;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 0.9em;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
