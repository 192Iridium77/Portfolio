<template>
<div class="flex justify-end w-1/2"
     @click="$emit('close')">
  <i-close class="h-8 text-accent"></i-close>
</div>
</template>

<script>
import iClose from '~/components/icons/Close'
export default {
  name: 'MobileNav',
  components: { iClose }
}
</script>
