<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field
          v-model="eventName"
          :rules="eventnameRules"
          :counter="50"
          label="Eventname"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="location"
          :rules="locationRules"
          label="Ort / Adresse"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-textarea
          v-model="description"
          label="Beschreibung"
          row-height="15"
          :counter="400"
          auto-grow
        ></v-textarea>
      </v-row>
      <v-row class="ma-55">
        <v-date-picker
          v-model="dates"
          color="secondary"
          header-color="primary lighten-1"
          full-width
          multiple
        ></v-date-picker>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container :v-if="dates">
      <v-row align="center" justify="start">
        <v-col v-for="(date, i) in sortedDates" :key="i" class="shrink">
          <v-chip color="secondary" close @click:close="dates.splice(i, 1)">{{
            formatDate(date)
          }}</v-chip>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "UserEventForm",
  data: () => ({
    valid: false,
    eventName: "",
    eventnameRules: [(v) => !!v || "Bitte gib einen Namen für dein Event an."],
    name: "",
    nameRules: [(v) => !!v || "Bitte gib einen Namen an."],
    location: "",
    locationRules: [(v) => !!v || "Bitte gib einen Ort oder eine Adresse an."],
    description: "",
    dates: [],
  }),
  methods: {
    handleSubmit() {
      const { eventName, location, userName, description } = this.formData;
      const payload = {
        user: userName,
        event: {
          eventName,
          location,
          userName,
          description,
        },
      };
      console.log(payload);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
  computed: {
    sortedDates() {
      return this.dates.sort();
    },
  },
};
</script>
