<template>
  <div>
    <div>
      <h2 class="text-accent text-center pb-4">Testimonials</h2>
    </div>
    <div class="p-8 flex justify-between w-full">
      <div class="w-full text-center flex-col md:w-1/3">
        <div class="avatar mx-auto bg-accent pb-4 w-24 h-24"></div>
        <h3 class="pb-4">Terence</h3>
        <p>"Brilliant developer."</p>
      </div>
      <div class="hidden md:block text-center md:w-1/3">
        <div class="avatar mx-auto bg-accent pb-4 w-24 h-24"></div>
        <h3 class="pb-4">Joey</h3>
        <p>"Schwiggidy Schwang Bro!"</p>
      </div>
      <div class="hidden md:block text-center md:w-1/3">
        <div class="avatar mx-auto bg-accent pb-4 w-24 h-24"></div>
        <h3 class="pb-4">Paul</h3>
        <p>"Matty is just phenomenal :)"</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>
