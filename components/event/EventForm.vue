<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field
          v-model="eventInfo.eventName"
          :rules="eventnameRules"
          :counter="50"
          label="Eventname"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventInfo.location"
          :rules="locationRules"
          label="Ort / Adresse"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventInfo.name"
          :rules="nameRules"
          :counter="20"
          label="Name"
          v-if="hasName && !isGuest"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventInfo.email"
          :rules="emailRules"
          label="E-Mail"
          v-if="hasName && !isGuest"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-textarea
          v-model="eventInfo.description"
          label="Beschreibung"
          row-height="15"
          :counter="400"
          auto-grow
        ></v-textarea>
      </v-row>
      <v-row>
        <v-text-field
          v-model="eventInfo.timezone"
          label="Timezone"
          auto-grow
        ></v-text-field>
      </v-row>
      <v-row class="ma-55">
        <v-date-picker
          v-model="eventInfo.dates"
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
    <v-container :v-if="dates">
      <v-row align="center" justify="start">
        <v-col v-for="(date, i) in sortedDates" :key="i" class="shrink">
          <v-chip
            color="secondary"
            close
            @click="itemclicked(date)"
            @click:close="eventInfo.dates.splice(i, 1)"
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
      <v-col align="center" >
      <v-btn align="center" @click="submitForm(eventInfo)" :disabled="!valid">{{
        buttonText
      }}</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "EventForm",
  isGuest: false,
  created() {
    const cookieRes = this.$cookies.get('uuid')
    if(cookieRes != undefined){
      this.isGuest = true;
    }
  },
  data: () => ({
    picker: true,
    dates: true,
    absolute: true,
    overlay: false,
    valid: true,
    eventInfo: {
      eventName: "",
      name: "",
      email: "",
      description: "",
      dates: [],
      timezone: new Date().getTimezoneOffset(),
    },
    eventnameRules: [(v) => !!v || "Bitte gib einen Namen für dein Event an."],
    nameRules: [(v) => !!v || "Bitte gib einen Namen an."],
    locationRules: [(v) => !!v || "Bitte gib einen Ort oder eine Adresse an."],
    emailRules: [
      (v) => !!v || "Bitte gib eine gültige E-Mail-Adresse an.",
      (v) => /.+@.+\..+/.test(v) || "Bitte gib eine gültige E-Mail-Adresse an.",
    ],
  }),
  methods: {
    emitToParent(event) {
      this.$emit("childToParent", this.eventInfo);
    },
    itemclicked(selectedItem) {
      this.overlay = true;
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
  computed: {
    sortedDates() {
      return this.eventInfo.dates.sort();
    },
  },
  props: ["submitForm", "hasName", "buttonText"],
};
</script>
