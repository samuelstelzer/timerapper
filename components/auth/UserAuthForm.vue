<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
      v-if="hasName"
    />

    <v-text-field
      v-model="userInfo.email"
      v-on:keyup="emitToParent"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      v-on:keyup="emitToParent"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      :rules="[required('password'), minLength('password', 8)]"
    />

    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{
      buttonText
    }}</v-btn>
  </v-form>
</template>

<script>
import validations from "@/utils/validations";
export default {
  methods: {
    // Define the method that emits data to the parent as the first parameter to $emit().
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent(event) {
      this.$emit("childToParent", this.userInfo.email);
    },
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      //hasName: false,
      userInfo: {
        email: "florianfindeisen@gmx.de",
        password: "Z75365er",
      },
      ...validations,
    };
  },
  props: ["submitForm", "buttonText", "hasName"],
};
</script>