<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field
          v-model="eventData.model.title"
          :rules="eventNameRules"
          :counter="50"
          label="Eventname"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventData.location"
          :rules="locationRules"
          label="Ort / Adresse"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventData.user.name"
          :rules="userNameRules"
          :counter="20"
          label="Name"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventData.user.email"
          :rules="emailRules"
          label="E-Mail"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-textarea
          v-model="eventData.model.description"
          label="Beschreibung"
          row-height="15"
          :counter="400"
          auto-grow
        ></v-textarea>
      </v-row>
      <!-- <v-row>
        <v-text-field
          v-model="eventData.timezone"
          label="Timezone"
          auto-grow
        ></v-text-field>
      </v-row> -->
      <v-row class="ma-55">
        <v-date-picker
          v-model="eventData.dates"
          color="secondary"
          header-color="primary lighten-1"
          no-title
          :first-day-of-week="1"
          locale="de-de"
          full-width
          multiple
        ></v-date-picker>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container :v-if="eventData.dates">
      <v-row align="center" justify="start">
        <v-col v-for="(date, i) in sortedDates" :key="i" class="shrink">
          <v-chip
            color="secondary"
            close
            @click="itemClicked(date)"
            @click:close="deleteDate(i)"
            >{{ formatDate(date) }}</v-chip
          >
        </v-col>
        <v-overlay :absolute="absolute" :value="overlay">
          <v-col style="width: 350px; flex: 0 1 auto" align="center">
            <v-time-picker
              v-model="picker"
              elevation="15"
              format="24hr"
            ></v-time-picker>
            <v-btn color="success" @click="overlay = false"> OK </v-btn>
          </v-col>
        </v-overlay>
      </v-row>
    </v-container>
    <v-row>
      <v-col align="center">
        <v-btn align="center" @click="createEvent" :disabled="!valid">
          Event erstellen
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import DateModel from "~/apollo/models/date";
import EventModel from "~/apollo/models/event";
import LocationModel from "~/apollo/models/location";

export default {
  name: "EventForm",
  data: () => ({
    isGuest: false,
    picker: true,
    absolute: true,
    overlay: false,
    valid: true,
    eventData: {
      model: new EventModel(),
      dates: [],
      location: "",
      user: {
        name: "",
        email: "",
      },
    },
    eventNameRules: [(v) => !!v || "Bitte gib einen Namen für dein Event an."],
    userNameRules: [(v) => !!v || "Bitte gib einen Namen an."],
    locationRules: [(v) => !!v || "Bitte gib einen Ort oder eine Adresse an."],
    emailRules: [
      (v) => !!v || "Bitte gib eine gültige E-Mail-Adresse an.",
      (v) => /.+@.+\..+/.test(v) || "Bitte gib eine gültige E-Mail-Adresse an.",
    ],
  }),
  methods: {
    createEvent(event) {
      const model = this.buildModel();
      this.$emit("create", model, this.eventData.user);
    },
    itemClicked(selectedItem) {
      this.overlay = true;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    deleteDate(i) {
      this.eventData.dates.splice(i, 1);
    },
    buildModel() {
      let model = this.eventData.model;
      const location = new LocationModel(this.eventData.location);
      this.eventData.dates.forEach(function (date) {
        const [year, month, day] = date.split("-");
        const dateModel = new DateModel(
          new Date(year, month, day, 0, 0, 0, 0),
          new Date(year, month, day, 23, 59, 59, 999),
          location
        );
        model.addDate(dateModel);
      });
      return model;
    },
  },
  computed: {
    sortedDates() {
      return this.eventData.dates.sort();
    },
  },
  watch: {},
  created() {
    const cookieRes = this.$cookies.get("user_id");
    if (cookieRes != undefined) {
      this.isGuest = true;
    }
  },
};
</script>
