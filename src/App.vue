<template>
  <div id="app">
    <Hero />
    <div class="container">
      <Input />
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Input from "./components/Input";

export default {
  name: "App",
  components: {
    Input,
    Hero,
  },
};
</script>