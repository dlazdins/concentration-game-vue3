<script setup>
// import { ref, reactive, nextTick, computed } from 'vue';
import { useGameLogic } from '../../src/composables/useGameLogic.js';

const initialCards = [
  { content: '🍎', matched: false, flipped: false },
  { content: '🍌', matched: false, flipped: false },
  { content: '🍇', matched: false, flipped: false },
  { content: '🍓', matched: false, flipped: false },
  { content: '🥝', matched: false, flipped: false },
  { content: '🍍', matched: false, flipped: false },
  { content: '🍒', matched: false, flipped: false },
  { content: '🍉', matched: false, flipped: false },
];
const { cards, moves, gameOver, startGame, flipCard } = useGameLogic(initialCards);
startGame();
</script>

<template>
  <div class="game-view">
    <div class="game-over" v-if="gameOver">
      <p class="title">
        <span>Congratulations!</span><br>
        <span>You completed the game in <span class="counter">{{ moves }}</span> moves.</span>
      </p>
      <button class="restart-btn" @click="startGame">Start New Game</button>
    </div>
    <template v-else>
      <h2>Flip & Match The Cards</h2>
      <div class="card-grid">
        <div
          class="card"
          v-for="(card, index) in cards.items"
          :key="card.id"
          @click="flipCard(index)"
          :class="{ 'is-flipped': card.flipped, 'matched': card.matched }">
          <div class="card-face card-front">{{ card.content }}</div>
          <div class="card-face card-back"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.game-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  color: $primary-white;
  background-color: $primary-blue;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  width: 100%;
  height: auto;
  max-width: 30rem;
  max-height: 30rem;
  aspect-ratio: 1;
}

.card {
  cursor: pointer;
  perspective: 1000px;
  margin: 10px;
  aspect-ratio: 1;
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: transform 0.8s;
  font-size: 2em;
}

.card-front {
  background-color: #eee;
  transform: rotateY(180deg);
}

.card-back {
  background-color: $primary-orange;
  transform: rotateY(0deg);
}

.is-flipped .card-front {
  transform: rotateY(0deg);
}

.is-flipped .card-back {
  transform: rotateY(-180deg);
}

.card.matched {
  visibility: hidden;
}

.game-over {
  font-weight: bold;
  width: 100%;
  text-align: center;

  .counter {
    color: $primary-orange;
  }

  .restart-btn {
    font-weight: bold;
    color: $primary-white;
    background-color: $primary-light-blue;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
  }
}
</style>
