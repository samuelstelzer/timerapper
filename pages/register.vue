<template>
  <v-container>
    <h1>Register</h1>
    <UserAuthForm
      buttonText="Sign up"
      :submitForm="registerUser"
      :hasName="true"
    />
  </v-container>
</template>
<script>
import UserAuthForm from "@/components/auth/UserAuthForm";
import gql from "graphql-tag";

export default {
  name: "register",
  components: {
    UserAuthForm,
  },
  methods: {
    async registerUser(registrationinfo) {
      console.log(registrationinfo);
      await this.$axios.post("/auth/register", registrationinfo);
      this.$auth.loginWith("local", {
        data: registrationinfo,
      });
      //alert("Manfred das mürrische Etwas");
    },
  },
};
</script>