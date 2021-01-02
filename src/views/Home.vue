<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div id="nav">
      <router-link :to="{ path: '/home/pokemons', query: { page: '1' } }"
        >精灵列表</router-link
      >
      |
      <router-link :to="{ path: '/home/moves', query: { page: '1' } }"
        >招式列表</router-link
      >
      |
      <router-link :to="{ path: '/home/features', query: { page: '1' } }"
        >特性列表</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home"
};
</script>
