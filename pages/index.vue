<template>
  <div>
    <about></about>
    <testimonials></testimonials>
    <projects></projects>
    <skills></skills>
    <div class="flex justify-center p-8">
      <div class="border-color-white border p-4">
        GET IN TOUCH
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import About from "~/components/About";
import Testimonials from "~/components/Testimonials";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import SiteFooter from "~/components/SiteFooter";

export default {
  components: {
    About,
    Testimonials,
    Projects,
    Skills,
    SiteFooter
  }
};
</script>
