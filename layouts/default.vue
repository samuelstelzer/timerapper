<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn class="hidden-xs-only" text to="/">Home</v-btn>
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text to="/myEvents">My Events</v-btn>
      </div>
      <div v-if="guest">
        <v-btn text to="/">{{ guest }}</v-btn>
      </div>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer app style="color: white" color="primary"
      ><v-row justify="center" no-gutters
        ><v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      guest: false,
      links: ["AGBs", "Datenschutz", "Contact us"],
    };
  },
  async created() {
    if (this.$cookies.get("uuid") != undefined) {
      const uuid = this.$cookies.get("uuid");
      const secret = this.$cookies.get("secret");
      const { data } = await this.$axios.get(
        "https://zeitraffer.app/api/v3/guest?uuid=" + uuid + "&secret=" + secret
      );
      if (data.name != "undefined") {
        this.guest = data.name;
      }
    }
  },
};
</script>
<style>
</style>
