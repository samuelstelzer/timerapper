<template>
  <v-container>
    <h1 align="center">My Events</h1>
    <h2>Restricted to Logged In Users only</h2>
    <v-row 
    class="mx-auto my-12">
      <v-col md="4" v-for="(key, i) in getMyevent" :key="i" class="shrink">
        <!-- <v-chip>{{ key }}</v-chip> -->
        <v-card class="pa-md-4 mx-auto pa-6" :to="`/event/` + key.uuidEvent" max-width="374"
          ><v-card-title style="word-break: normal">{{
            key.titleEvent
          }}</v-card-title>
          <v-card-subtitle
            ><v-icon>mdi-home</v-icon> {{ key.location }}</v-card-subtitle
          >
          <v-card-text>{{ key.description }}</v-card-text></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import GET_EVENTS from "@/apollo/queries/get_events.ts";

export default {
  middleware: "auth",
  apollo: {
    getMyevent: {
      query: GET_EVENTS,
    },
  },
};
</script>