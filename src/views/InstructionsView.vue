<template>
  <div class="instructions-view">
    <section class="instructions">
      <header>
        <h2>How to Play Concentration Game</h2>
      </header>

      <article>
        <h3>Objective</h3>
        <p>Collect all pairs of fruit cards in the fewest moves possible.</p>

        <h3>Setup</h3>
        <ul>
          <li>You'll see a 4x4 grid, totaling 16 cards.</li>
          <li>Each card has a fruit image, with 8 unique fruits in pairs.</li>
          <li>When the game starts, all cards are face-down in a random order.</li>
        </ul>

        <h3>Gameplay</h3>
        <ol>
          <li><strong>Start the Game</strong>: When the game page loads, the cards are already shuffled and placed face-down.</li>
          <li><strong>Flip a Card</strong>: Click on any card to flip it over and reveal the fruit image.</li>
          <li>
            <p><strong>Find a Match</strong>: After flipping one card, select another card to flip.</p>
            <p>If both cards have the same fruit, it’s a match! The cards will be removed from the grid, and you earn a point.</p>
            <p>If they’re different, remember what you saw and where it was. After a short pause, the cards will flip back face-down.</p>
          </li>
          <li><strong>Keep Playing</strong>: Continue flipping cards to find all the matches.</li>
          <li><strong>Track Your Moves</strong>: Each pair of flips counts as one move. Try to complete the game in the fewest moves possible.</li>
        </ol>

        <h3>Winning the Game</h3>
        <p>Once you've matched all the fruit pairs and cleared the grid, a congratulatory message will appear, showing you the number of moves you took. To play again, simply click on "Start New Game."</p>

        <h3>Tips</h3>
        <ul>
          <li>Take your time to memorize the positions and images of each card.</li>
          <li>Try to recall the positions of previously seen fruits when you flip a new card.</li>
        </ul>

        <p>Enjoy sharpening your memory with this fruity challenge! 🍎🍊🍉🍇🥝🍍🍌🍒</p>
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.instructions-view {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  color: $primary-white;
  background-color: $primary-blue;
  width: 100%;
}

.instructions-view .instructions {
  max-width: 600px;
  text-align: justify
}

.instructions-view h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.instructions-view h3 {
  margin: 0.5rem 0;
}
</style>
