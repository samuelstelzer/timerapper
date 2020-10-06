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
    loginUser(logininfo) {
      console.log(logininfo.email);
      this.$auth.loginWith("local", {
        data: logininfo,
      });
    },
  },
};
</script>