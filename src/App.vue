<template>
  <v-app>
    <Nav />
    <Home id="home" />
    <Products id="products" />
    <About id="about" />
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Products from "./views/Products.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",

  components: {
    Nav,
    Home,
    About,
    Products
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
html,
body{
  
}

.content {
  margin: 5vh 0 5vh 0;
}
.home-btns {
  width: 30%;
  display: inline-flex;
}
.ig,
.secondary {
  margin: 10px;
}

.section {
  height: 52em;
}

@media (max-width: 960px){
  .v-card {
    margin: 15vh 20vh 15vh 20vh;
  }

  .section {
  height: 70em;
}
}

</style>
