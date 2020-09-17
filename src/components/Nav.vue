<template>
  <v-app-bar fixed flat dense>
    <v-app-bar-title><h2>earringssssssss</h2></v-app-bar-title>
    <v-spacer></v-spacer>
    <v-tabs class="hidden-sm-and-down" fixed-tabs color="secondary">
      <v-tab
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        v-scroll-to="item.ref"
        flat
        >{{ item.name }}</v-tab
      >
    </v-tabs>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          :bind="attrs"
          v-on="on"
          class="hidden-md-and-up"
          flat
        >
          <v-icon>menu</v-icon>
        </v-btn>
      </template>
      <v-list :height="900" :width="300" content-align="right">
        <v-list-item
          v-for="item in menu"
          :key="item.path"
          @click="menuItems()"
          :to="item.path"
          v-scroll-to="item.ref"
          color="secondary"
        >
          <v-list-item-title
            ><h4>{{ item.name }}</h4></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { path: "home", name: "HOME", ref: "#home" },
        { path: "productos", name: "PRODUCTOS", ref: "#products" },
        { path: "sobremi", name: "SOBRE MÍ", ref: "#about" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: inherit;
  font-size: 3rem;
}
.v-list-item {
  margin-top: 2rem;
  .v-list-item__title {
    font-size: large;
    text-align: center;
  }
}
</style>
