<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn text to="/">Home</v-btn>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text>Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer app color="primary">Made with ❤️ in Munich & Stuttgart</v-footer>
  </v-app>
</template>

<style></style>
