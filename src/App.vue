<template>
  <HeaderSite msg="Welcome to Your Vue.js + TypeScript App" />
  <router-view />
  <FooterSite msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderSite from "@/components/HeaderSite.vue"; // @ is an alias to /src
import FooterSite from "@/components/FooterSite.vue"; // @ is an alias to /src

@Options({
  components: {
    HeaderSite,
    FooterSite,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
