<script setup>
import { ref, computed } from 'vue';

const version = ref('1.0.0');
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer>
    <div class="content">
      <p>Website Version: {{ version }}</p>
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  color: $primary-white;
  background-color: $primary-purple;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.8rem;
}

.content {
  max-width: 1200px;
  margin: 0 auto;

  p {
    margin: 6px 0;
  }
}
</style>
