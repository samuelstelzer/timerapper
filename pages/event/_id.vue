<template>
  <v-container>
    <v-row v-for="(value, key) in getEvent" :key="value">
      {{ key }}: {{ value }}
    </v-row>
  </v-container>
</template>

<script>
import EVENT_SHORT from "@/apollo/queries/event_short.ts";

export default {
  name: "event",
  data() {
    return {
      eventId: this.$route.params.id,
      getEvent: {},
    };
  },
  apollo: {
    getEvent: {
      query: EVENT_SHORT,
      variables() {
        return {
          uuidEvent: this.eventId,
        };
      },
    },
  },
};
</script>

<style></style>
