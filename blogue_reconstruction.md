```html
<!-- Pseudo-code HTML for the "Blogue" Page -->
<header>
  <!-- Same header as the homepage -->
</header>

<main>
  <section class="hero">
    <div class="hero-image">
      <!-- Background image -->
    </div>
    <div class="hero-text">
      <h1>Perspectives d’experts.</h1>
      <h2>Solutions concrètes. Voix de confiance.</h2>
      <h3>NOTRE BLOGUE.</h3>
    </div>
  </section>

  <section class="blog-posts">
    <div class="post-grid">
      <!-- Blog Post 1 -->
      <article class="blog-post-excerpt">
        <img src="..." alt="Blog post image">
        <h4>Présentation du balado d’i24 « Au-delà de l’appel »</h4>
        <a href="..." class="read-more">Read More</a>
      </article>

      <!-- Blog Post 2 -->
      <article class="blog-post-excerpt">
        <img src="..." alt="Blog post image">
        <h4>Pourquoi tous les Canadiens ont l’obligation de faire des affaires au Canada</h4>
        <a href="..." class="read-more">Read More</a>
      </article>

      <!-- More blog posts... -->
    </div>
  </section>

  <section class="newsletter-signup">
    <h3>Abonnez-vous à notre infolettre.</h3>
    <form>
      <input type="text" placeholder="Nom complet">
      <input type="email" placeholder="Courriel">
      <button type="submit" class="cta-button">Soumettre</button>
    </form>
  </section>

  <section class="final-cta">
    <!-- Same as homepage -->
  </section>
</main>

<footer>
  <!-- Same footer as the homepage -->
</footer>
```

```css
/* Pseudo-code CSS for the "Blogue" Page */

/* General Styles are consistent with the homepage */

.hero {
  /* Similar to other pages */
}

.blog-posts {
  padding: 60px 20px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.blog-post-excerpt {
  border: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.blog-post-excerpt img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.read-more {
  color: #21a3a3; /* Primary brand color */
  text-decoration: none;
  font-weight: bold;
}

.newsletter-signup {
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
}
```
