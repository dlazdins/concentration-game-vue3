<template>
  <div class="about-view">
    <section class="content">
      <header class="about-header">
        <h2>About Us</h2>
      </header>

      <article class="about-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget consectetur sagittis, nisl mi hendrerit mauris, eget fermentum libero nulla ut nulla. Etiam et lorem fermentum, aliquet quam non, blandit augue.</p>

        <p>Vivamus nec dui et turpis sollicitudin aliquet. Proin eget ante in diam gravida posuere. Nulla facilisi. Mauris ultricies, massa non fermentum bibendum, nisi eros bibendum nisi, eu fermentum nunc est eget nunc.</p>
      </article>

      <footer class="about-footer">
        <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
      </footer>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-view {
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

.content {
  max-width: 600px;
  text-align: justify;
}

.about-header {
  text-align: center;
}

.about-footer a{
  color: $primary-orange;
}
</style>
