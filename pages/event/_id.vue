<template>
  <v-container>
    <!-- <v-row v-for="(value, key) in getEvent" :key="value">
      {{ key }}: {{ value }}
    </v-row> -->
    <v-row md="12">
      <v-card md="12" min-width="550" align="center"
        ><v-card-title align="center" style="word-break: normal">{{
          getEvent.titleEvent
        }}</v-card-title>
        <v-card-subtitle
          ><v-icon>mdi-home</v-icon> {{ getEvent.location }}</v-card-subtitle
        >
        <v-card-text align="center">{{ getEvent.description }}</v-card-text>
      </v-card>
      <!-- <div v-if="getEvent.timeVotes.edges !== 'undefined' || getEvent.timeVotes.edges.length > 0">
        <v-col
          md="4"
          v-for="(key, i) in getEvent.timeVotes.edges"
          :key="i"
          class="shrink"
        >
          <v-card-title
            >{{ formatDate(key.node.start) }}{{ key.node.start }}</v-card-title
          >
        </v-col>
      </div> -->
    </v-row>
  </v-container>
</template>

<script>
import EVENT from "@/apollo/queries/event.ts";

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
      query: EVENT,
      variables() {
        return {
          uuidEvent: this.eventId,
        };
      },
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      //  var d = date.parse();
      var d = new Date(date);

      const [year, month, day] = [d.getYear(), d.getMonth(), d.getDay()];
      return `${day}/${month}/${year}`;
    },
  },
};
</script>

<style></style>
