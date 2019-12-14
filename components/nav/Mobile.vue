<template>
<div class="fixed inset-0 p-8 bg-secondary z-30">
  <div class="flex items-center">
    <div class="w-1/2 justify-start items-center">
      <nuxt-link to="/">
        <i-logo class="text-accent h-12"></i-logo>
      </nuxt-link>
    </div>
    <div class="flex justify-end w-1/2"
         @click="$emit('close')">
      <i-close class="h-8 text-accent"></i-close>
    </div>
  </div>
</div>
</template>

<script>
import iClose from '~/components/icons/Close'
import iLogo from '~/components/icons/Logo'

export default {
  name: 'MobileNav',
  components: { iClose, iLogo }
}
</script>
