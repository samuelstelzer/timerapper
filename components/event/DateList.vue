<template>
  <v-container :v-if="dates">
    <ul>
      <li v-for="(date, index) in dates" :key="index">{{ date }}</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "DateList",
  props: {
    dates: []
  }
};
</script>
