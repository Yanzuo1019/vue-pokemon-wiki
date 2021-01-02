<template>
  <div class="pokemons">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    This is pokemons page.
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Pokemons",
  components: {
    // HelloWorld
  },
  mounted() {
    console.log(this.$route.query);
  }
};
</script>
