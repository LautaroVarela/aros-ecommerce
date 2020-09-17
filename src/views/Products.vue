<template id="products">
  <div class="section products">
    <v-container class="content">
      <h1 class="titulo-section teal--text text--darken-4">Mis productos</h1>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 lg4>
          <v-card>
            <v-img src="/img/chili.jpg" />
            <v-card-title primary-title>
              <p>Aros "Chili"</p>
            </v-card-title>
            <h3>$150</h3>
            <v-card-actions>
              <v-btn flat dark>Agregar al carrito</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md4 lg4>
          <v-card>
            <v-img src="/img/sincara.jpg" />
            <v-card-title primary-title>
              <p>Aros "Sin Cara"</p>
            </v-card-title>
            <h3>$150</h3>
            <v-card-actions>
              <v-btn flat dark>Agregar al carrito</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md4 lg4>
          <v-card>
            <v-img src="/img/girasoles.jpg" />
            <v-card-title primary-title>
              <p>Aros "Girasoles"</p>
            </v-card-title>
            <h3>$150</h3>
            <v-card-actions>
              <v-btn flat dark>Agregar al carrito</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-card {
  margin: 2vh 5vh;
}

h3,
p {
  text-align: center;
}

.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 10px;
}

.section, .products {
  display: flex;
  flex-wrap: wrap;
}
</style>
