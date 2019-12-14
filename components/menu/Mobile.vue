<template>
<div class="flex p-8 bg-secondary justify-between items-center">
  <nuxt-link to="/">
    <i-logo class="text-accent h-12"></i-logo>
  </nuxt-link>
  <div class="w-1/2 flex justify-end items-center"
       @click="openedMenu">
    <i-menu v-show="!active"
            class="text-accent h-10"></i-menu>
    <slot></slot>
  </div>
  <mobile-nav v-show="active"
              @close="menuClosed"></mobile-nav>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import iLogo from '~/components/icons/Logo'
import iMenu from '~/components/icons/Menu'
import MobileNav from '~/components/nav/Mobile'

export default {
  name: 'MobileMenu',
  components: { iLogo, iMenu, MobileNav },
  methods: {
    ...mapMutations(['menuClosed', 'openedMenu'])
  },
  computed: {
    ...mapState(['active'])
  }
}
</script>
