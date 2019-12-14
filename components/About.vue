<template>
  <div>
    <div class="p-8">
      <div class="w-full pb-4 md:w-1/2">
        <h2 class="title text-center text-accent pb-2">
          About
        </h2>
        <div class="flex items-center">
          <div class="d-inline avatar bg-accent w-4 h-4"></div>
          <div class="mx-2 d-inline text-gray-700">Matt Martin</div>
        </div>
      </div>
      <p>
        Hi, nice to meet you. I am a full stack web developer with two years
        experience in a fast paced startup company. etc.
      </p>
    </div>
    <div
      class="hero-image w-full h-64 md:w-1/2"
      style="background-image: url('./computer.jpg')"
    ></div>
  </div>
</template>

<script>
export default {};
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
