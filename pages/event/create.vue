<template>
  <v-container>
    <h1>Erstelle ein Event</h1>
    <UserEventForm v-if="$auth.loggedIn" />
    <BaseEventForm v-else />
  </v-container>
</template>

<script>
import USER_CREATE_EVENT from "@/apollo/mutation/create_event.ts";
import { mapState } from "vuex";

export default {
  name: "CreateEvent",
  data() {
    return {
      token: this.$auth.getToken("local").s,
    };
  },
  computed: {
    ...mapState,
  },
  methods: {
    createEvent() {
      const { description, url } = this.$data;
      this.$apollo.mutate({
        mutation: USER_CREATE_EVENT,
        variables: {
          description: this.description,
          maxParticipants: 10,
          isVote: false,
          deadline: "2020-12-31 12:00:00.000Z",
          endTime: "2020-12-31 12:00:00.000Z",
          location: this.location,
          startTime: Date.now(),
          title: this.title,
          //timings: "timings",
        },
      });
    },
  },
};
</script>
