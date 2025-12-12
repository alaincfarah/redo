```html
<!-- Pseudo-code HTML for the "À propos de nous" Page -->
<header>
  <!-- Same header as the homepage -->
</header>

<main>
  <section class="presidents-message">
    <div class="president-image">
      <!-- Image of Gary Blair -->
    </div>
    <div class="president-quote">
      <h1>Un mot de notre président, Gary Blair.</h1>
      <blockquote>
        "Chaque grande entreprise commence par une histoire — la nôtre est faite de courage, de vision et d’une quête incessante d’excellence..."
      </blockquote>
    </div>
  </section>

  <section class="company-history">
    <h2>Là où l’héritage rencontre l’innovation.</h2>
    <p>i24 est née il y a 55 ans...</p>
    <!-- Image related to history/innovation -->
  </section>

  <section class="future-vision">
    <h2>Repousser les limites, ensemble: l’avenir est à créer.</h2>
    <p>Aujourd’hui, cet esprit d’innovation se perpétue...</p>
    <a href="/fr/pourquoi-nous-choisir/" class="cta-link">Pourquoi nous choisir</a>
  </section>

  <section class="partners">
    <h2>Plus de 900 entreprises à travers le Canada nous font confiance.</h2>
    <!-- Logos of partner companies -->
  </section>

  <section class="awards">
    <h2>29e Prix d’excellence national de l’industrie.</h2>
    <h2>18e Prix d’excellence international de l’industrie.</h2>
    <!-- Award icons -->
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
/* Pseudo-code CSS for the "À propos de nous" Page */

/* General Styles are consistent with the homepage */

.presidents-message {
  display: flex;
  align-items: center;
  padding: 60px 20px;
}

.president-image {
  flex: 1;
}

.president-quote {
  flex: 2;
  padding-left: 40px;
}

blockquote {
  font-style: italic;
  font-size: 1.2em;
}

.company-history, .future-vision {
  padding: 60px 20px;
}

.partners, .awards {
  text-align: center;
  padding: 60px 20px;
}
```
