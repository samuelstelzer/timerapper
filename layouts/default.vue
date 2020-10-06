<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn class="hidden-xs-only" text to="/">Home</v-btn>
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text to="/myEvents">My Events</v-btn>
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
    <v-footer app style="color: white" color="primary">Made with ❤️ in Munich & Stuttgart</v-footer>
  </v-app>
</template>

<style>

</style>
