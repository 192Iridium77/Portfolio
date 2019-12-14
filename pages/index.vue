<template>
  <div>
    <v-layout column>
      <v-flex xs12 sm8 md6>
        <v-avatar color="black" size="72">
          <span class="white--text">Avatar</span>
        </v-avatar>
        <div>Matt Martin</div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md4></v-flex>
      <v-flex md8 class="introduction pa-12">
        <div>Title</div>
        <div>Copy</div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <a href="http://www.linkedin.com/in/matthew-martin0108"
          ><img src="~/assets/linkedin.svg"
        /></a>

        <a class="px-4" href="https://github.com/192Iridium77"><img src="~/assets/github.svg" width="27" height="27"></img></a>
      </v-flex>
    </v-layout>
    <v-row>
      <v-col>
        <v-card outlined class="ma-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Hendercare</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-avatar tile size="80">
            <img src="~/assets/hendercareLogo.svg" />
          </v-list-item-avatar>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="ma-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>MAC</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-avatar tile size="80">
            <img src="~/assets/hendercareLogo.svg" />
          </v-list-item-avatar>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="ma-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Action Market Research</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-avatar tile size="80">
            <img src="~/assets/hendercareLogo.svg" />
          </v-list-item-avatar>
        </v-card>
      </v-col>
        <!-- <div></div>
        <div>Beaumonts</div>
        <div>MAC</div>
        <div>Action Market Research</div>
        <div>Sited</div>
        <div>Xconvenience</div>
        <div>SA Museum</div>
        <div>SAHMRI</div>
        <div>Miele</div>
        <div>Rundle Mall</div> -->
    </v-row>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";
// import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    // Logo,
    // VuetifyLogo
  }
};
</script>

<style lang="scss" scoped>
.introduction {
  border-left: 3px solid black;
}
</style>
