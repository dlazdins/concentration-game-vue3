<script setup>
import { ref, reactive, nextTick, computed } from 'vue';

const initialCards = [
  { id: 1, content: '🍎', matched: false, flipped: false },
  { id: 2, content: '🍌', matched: false, flipped: false },
  { id: 3, content: '🍇', matched: false, flipped: false },
  { id: 4, content: '🍓', matched: false, flipped: false },
  { id: 5, content: '🥝', matched: false, flipped: false },
  { id: 6, content: '🍍', matched: false, flipped: false },
  { id: 7, content: '🍒', matched: false, flipped: false },
  { id: 8, content: '🍉', matched: false, flipped: false },
];

const cards = reactive({ items: [] });
const flippedCards = ref([]);
const moves = ref(0);
const gameOver = computed(() => cards.items.every(card => card.matched));

// Fisher-Yates shuffle function
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const shuffleCards = () => {
  let duplicatedCards = [...initialCards, ...initialCards.map(card => ({ ...card }))];
  duplicatedCards.forEach((card, index) => {
    card.id = `${card.content}-${index}`;
    card.matched = false;
    card.flipped = false;
  });
  shuffle(duplicatedCards);
  cards.items = duplicatedCards;
}

const flipCard = async index => {
  // Prevent flipping the same card twice
  const card = cards.items[index];
  if (card.flipped || flippedCards.value.length === 2) {
    return;
  }

  card.flipped = true;
  flippedCards.value.push(card);

  // Check for match if two cards are flipped
  if (flippedCards.value.length === 2) {
    moves.value++;
    await nextTick(); // Wait for the DOM update
    checkForMatch();
  }
}

const checkForMatch = () => {
  const [firstCard, secondCard] = flippedCards.value;

  if (firstCard.content === secondCard.content) {
    setTimeout(() => {
      firstCard.matched = true;
      secondCard.matched = true;
      resetFlippedCards();
    }, 1000);
  } else {
    setTimeout(() => {
      firstCard.flipped = false;
      secondCard.flipped = false;
      resetFlippedCards();
    }, 1000);
  }
}

const resetFlippedCards = () => {
  flippedCards.value = [];
}

const startGame = () => {
  moves.value = 0;
  resetFlippedCards();
  shuffleCards();
}

startGame();
</script>

<template>
  <div class="game-view">
    <h2 v-if="!gameOver">Flip & Match The Cards</h2>
    <div
      class="card-grid"
      v-if="!gameOver">
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
    <div class="game-over" v-if="gameOver">
      <p class="title">
        <span>Congratulations!</span><br>
        <span>You completed the game in <span class="counter">{{ moves }}</span> moves.</span>
      </p>
      <button class="restart-btn" @click="startGame">Start New Game</button>
    </div>
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
