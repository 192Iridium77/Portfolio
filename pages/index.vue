<template>
  <div>
    <about></about>
    <testimonials></testimonials>
    <projects></projects>
  </div>
</template>

<script>
import About from "~/components/About";
import Testimonials from "~/components/Testimonials";
import Projects from "~/components/Projects";

export default {
  components: {
    About,
    Testimonials,
    Projects
  }
};
</script>
