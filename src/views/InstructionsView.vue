<template>
  <div class="instructions-view">
    <div class="content">
      <h1>Instructions page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .instructions-view {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary-purple;

  }
  .instructions-view .content {
    max-width: 600px;
    text-align: justify
  }

  .instructions-view h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .instructions-view p {
    margin-bottom: 10px;
  }
</style>
