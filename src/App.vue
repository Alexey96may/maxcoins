<template>
  <HeaderSite msg="Welcome to Your Vue.js + TypeScript App" />
  <router-view />
  <FooterSite msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script setup lang="ts">
import HeaderSite from "@/components/HeaderSite.vue";
import FooterSite from "@/components/FooterSite.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();

onMounted(async () => {
  await store.dispatch("GET_COINS_FROM_IP");
  console.log("from App шты", store.getters.COINS);
});
let test = reactive(store.getters.COINS);
console.log("from App", test);
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
