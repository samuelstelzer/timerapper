<template>
  <div class="container"></div>
</template>

<script>
import EVENT from "@/apollo/queries/event.ts";

export default {
  name: "event",
  data() {
    return {
      eventId: this.$route.params.event
    };
  },
  apollo: {
    event: {
      query: EVENT,
      variables() {
        return {
          event: this.eventId
        };
      }
    }
  }
};
</script>

<style></style>
