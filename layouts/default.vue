<template>
  <v-app class="app">
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-container>
      <v-app-bar :clipped-left="clipped" fixed app flat>
        <v-spacer />
        <div class="ml-8">Menu 1</div>
        <div class="ml-8">Menu 2</div>
        <div class="mr-12 ml-8">Menu 3</div>
      </v-app-bar>
    </v-container> -->
    <v-content>
      <v-container class="container">
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Matt Martin"
    };
  }
};
</script>

<style scoped lang="scss">
.menu {
  * {
    margin: 0 32px;
  }
}

.app {
  background-color: #ededed;
}
.container {
  background-color: #f7f7f7;
}
</style>
