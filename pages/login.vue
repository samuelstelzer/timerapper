<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>
<script>
import UserAuthForm from "@/components/auth/UserAuthForm";
import gql from "graphql-tag";

export default {
  name: "login",
  components: {
    UserAuthForm,
  },
  methods: {
    async loginUser(logininfo) {
      //console.log(logininfo.email);
      try {
        await this.$auth.loginWith("local", {
          data: logininfo,
        })
        this.$cookies.remove('uuid')
        this.$cookies.remove('secret')
        this.$router.push('/')
      } catch (error) {
        // Complete ERROR Handling with Snackbar
        console.log(error);
      }
    },
  },
};
</script>