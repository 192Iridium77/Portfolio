<template>
<div>
  <div class="p-8">
    <div class="w-full pb-4 lg:w-1/2">
      <h2 class="text-center text-accent pb-2">
        About
      </h2>
    </div>
    <p class="md:text-center">
      I write clean, maintainable code. I enjoy solving complex problems and playing guitar.
      <br>
      <br>
      I'm currently leading a team of developers on two projects. Each with different levels of skill on projects pushing the boundaries of tech in the Mobile Apps space such as Nativescipt.
    </p>
  </div>
  <div class="hero-image w-full h-64 md:w-1/2"
       style="background-image: url('./computer.jpg')"></div>
</div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.hero-image {
  background-repeat: no-repeat;
  background-size: cover;
}

.avatar {
  border-radius: 50%;
}
</style>
