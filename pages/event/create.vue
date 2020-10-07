<template>
  <v-container>
    <h1>Erstelle ein Event</h1>
    <EventForm
      v-if="$auth.loggedIn"
      buttonText="Create Event"
      :submitForm="createEvent"
    />
    <EventForm
      v-else
      :hasName="true"
      buttonText="Create Event"
      :submitForm="createUserAndEvent"
    />
  </v-container>
</template>

<script>
import USER_CREATE_EVENT from "@/apollo/mutation/create_event.ts";
import GUEST_CREATE from "@/apollo/mutation/guest_create.ts";
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
    async createEvent(eventInfo) {
      console.log(eventInfo);
      const {
        name,
        description,
        eventName,
        location,
        dates,
        email,
      } = eventInfo;
      try {
        const res = await this.$apollo
          .mutate({
            mutation: USER_CREATE_EVENT,
            variables: {
              description: description,
              maxParticipants: 10,
              isVote: true,
              location: location,
              title: eventName,
              //timings: "timings",
            },
          })
          .then(({ data }) => {
            console.log(data.userCreateEvent.eventId);
            this.$router.push("/event/" + data.userCreateEvent.eventId);
          });
      } catch (error) {
        // TODO: handle error loggin
        console.log(error);
      }
    },
    async createUserAndEvent(eventInfo) {
      console.log(eventInfo);
      const {
        name,
        description,
        eventName,
        location,
        dates,
        email,
      } = eventInfo;
      console.log(
        "User Creation" + name,
        description,
        eventName,
        location,
        dates,
        email
      );
      try {
        const res = await this.$apollo
          .mutate({
            mutation: GUEST_CREATE,
            variables: {
              aliasName: name,
            },
          })
          .then(({ data }) => {
            console.log(data);
            this.$cookies.set("uuid", data.createGuest.id, {
              path: "/",
              maxAge: 60 * 60 * 24 * 90,
            });
            this.$cookies.set("secret", data.createGuest.secret, {
              path: "/",
              maxAge: 60 * 60 * 24 * 90,
            });
            //  this.$router.push("/event/" + data.userCreateEvent.eventId);
          });
      } catch (error) {
        // TODO: handle error loggin
        console.log(error);
      }
    },
  },
};
</script>
