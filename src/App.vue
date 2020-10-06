<template>
  <div id="app">
    <Hero />
    <div class="container">
      <Input />
      <AboutUs class="mt-5" />
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Input from "./components/Input";
import AboutUs from "./components/AboutUs";

export default {
  name: "App",
  components: {
    Input,
    Hero,
    AboutUs
  },
};
</script>