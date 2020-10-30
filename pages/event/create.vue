<template>
  <v-container>
    <h1>Erstelle ein Event</h1>
    <EventForm @create="createEvent" />
  </v-container>
</template>

<script>
import CREATE_EVENT from "@/apollo/mutation/create_event.ts";
import { mapState } from "vuex";

export default {
  name: "CreateEvent",
  data() {
    return {
      token: this.$auth.getToken("local"),
    };
  },
  computed: {
    ...mapState,
  },
  methods: {
    async createEvent(eventModel, user) {
      try {
        const res = await this.$apollo
          .mutate({
            mutation: CREATE_EVENT,
            variables: {
              event: eventModel,
              name: user.name,
              email: user.email,
            },
          })
          .then(({ data }) => {
            this.$router.push("/event/" + data.eventId);
          });
      } catch (error) {
        // TODO: handle error loggin
        console.log(error);
      }
    },
  },
};
</script>
