<template>
  <div class="root"></div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Root",
  mounted() {
    this.$router.push("/home");
  }
};
</script>
