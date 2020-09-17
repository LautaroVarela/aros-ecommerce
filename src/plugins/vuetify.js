import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.lighten3, //teal lighten
        secondary: colors.teal.darken4, //teal darken
        info: "#E0E0E0",
        ig: "#F8BBD0"
      },
      dark: {
        teal: "#00695C"
      }
    }
  }
});
