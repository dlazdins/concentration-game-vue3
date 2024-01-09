<template>
  <div class="home-view">
    <section class="content">
      <h2>Welcome to Concentration game!</h2>
      <p>
        Embark on a delightful journey through our vibrant puzzle where your memory is the key to success.
        As you flip each card, discover an array of colorful fruits and match them to win. Sharpen your memory, challenge your friends, and see how quickly you can clear the board.
        Are you ready to put your memory skills to the test? Let's get matching!
      </p>
      <a class="start-btn" href="/game">Start Game</a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $primary-purple;
  padding: 2rem 2rem;
  color: $primary-white;
  background-color: $primary-blue;
  width: 100%;
}

.home-view .content {
  max-width: 600px;
  text-align: justify;
}

.home-view h2 {
  font-size: 2rem;
  text-align: center;
}

.start-btn {
  display: flex;
  justify-content: center;
  width: 180px;
  font-weight: bold;
  color: $primary-white;
  background-color: $primary-light-blue;
  padding: 0.5rem 1.5rem;
  margin: 1.5rem auto 0 auto;
  border: none;
  border-radius: 6px;
  text-decoration: none;
}
</style>
