<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const screenWidth = ref(window.innerWidth);
const isDesktop = ref(screenWidth.value >= 1024);
const showMenu = ref(isDesktop.value);
const windowResized = ref(false);

const toggleMenu = () => {
  windowResized.value = false;

  if (isDesktop.value) {
    showMenu.value = true;
  } else {
    showMenu.value = !showMenu.value;
  }
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  isDesktop.value = screenWidth.value >= 1024;
  windowResized.value = true;

  if (isDesktop.value) {
    showMenu.value = true;
  } else {
    showMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const transitionName = computed(() => windowResized.value ? 'no-animation' : 'slide-down');
</script>

<template>
  <header>
    <div class="burger-menu" @click="toggleMenu" aria-label="Toggle menu">
      <img v-if="!showMenu" class="icon" src="../assets/icons/burger-menu.svg" alt="Open menu">
      <img v-else class="icon" src="../assets/icons/close.svg" alt="Close menu">
    </div>
    <transition :name="transitionName">
      <div class="menu-content" v-show="showMenu">
        <nav>
          <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
          <RouterLink to="/game" @click="toggleMenu">Game</RouterLink>
          <RouterLink to="/instructions" @click="toggleMenu">Instructions</RouterLink>
          <RouterLink to="/about" @click="toggleMenu">About us</RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 2rem;
  background-color: $primary-purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.burger-menu {
  position: absolute;
  z-index: 1000;
  color: $primary-white;
  cursor: pointer;
  display: block;
  background: none;
  border: none;
}

.burger-menu .icon {
  height: 20px;
  width: 20px;
}

.menu-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: $primary-violet;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav a {
  display: block;
  padding: 1rem;
  color: $primary-white;
  text-decoration: none;
  font-size: 1.5rem;
}

nav a.router-link-exact-active {
  color: $primary-orange;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  header {
    height: 80px;
  }

  .burger-menu {
    display: none;
  }

  .menu-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: static;
    width: auto;
    height: auto;
    background-color: transparent;
  }

  nav {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  nav a {
    padding: 0 1rem;
    border-left: 1px solid $primary-white;
    font-size: 1.2rem;
  }

  nav a:first-of-type {
    border: none;
  }
}

@media (max-width: 1023px) {
  /* Transition for sliding down */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: max-height 0.5s ease-in-out;

    &.menu-content nav{
      transition: opacity 0.5s ease-in-out;
    }
  }

  .slide-down-enter-from,
  .slide-down-leave-to {
    max-height: 0;
    overflow: hidden;

    &.menu-content nav{
      opacity: 0;
    }
  }

  .slide-down-enter-to,
  .slide-down-leave-from {
    max-height: 100%;
    opacity: 1;
  }
}

/* Transition for resize without animation */
.no-animation-enter-active,
.no-animation-leave-active {
  transition: none;
}

.no-animation-enter,
.no-animation-leave-to {
  display: none;
}
</style>
