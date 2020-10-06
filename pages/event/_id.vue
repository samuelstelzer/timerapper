<template>
  <v-container>
    <!-- <v-row v-for="(value, key) in getEvent" :key="value">
      {{ key }}: {{ value }}
    </v-row> -->
    <v-row md="12">
      <v-card md="12" min-width="550" align="center" 
        ><v-card-title  align="center" style="word-break: normal" >{{
          getEvent.titleEvent
        }}</v-card-title>
        <v-card-subtitle><v-icon>mdi-home</v-icon> {{ getEvent.location }}</v-card-subtitle>
        <v-card-text align="center" >{{ getEvent.description }}</v-card-text></v-card
      >
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
