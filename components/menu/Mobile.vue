<template>
<div class="flex p-8 bg-secondary justify-between">
  <i-logo class="text-accent h-12"></i-logo>
  <i-menu class="text-accent h-12"></i-menu>
</div>
</template>

<script>
import iLogo from '~/components/icons/Logo'
import iMenu from '~/components/icons/Menu'
export default {
  name: 'MobileMenu',
  components: { iLogo, iMenu }
}
</script>
