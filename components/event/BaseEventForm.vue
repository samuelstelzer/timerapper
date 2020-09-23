<template>
  <div>
    <form action>
      <div>
        <label for="formData.eventName">Event Name</label>
        <input type="text" v-model="formData.eventName" required />
      </div>
      <div>
        <label for>Name</label>
        <input type="text" v-model="formData.userName" required />
      </div>
      <div>
        <label for>Ort / Adresse</label>
        <input type="text" v-model="formData.location" />
      </div>
      <div>
        <label for>Beschreibung</label>
        <input type="text" v-model="formData.description" required />
      </div>
        <input type="submit" value="Event erstellen" @submit.prevent="handleSubmit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'BaseEventForm',
  data() {
    return {


      formData: {
        
        eventName: '',
        location: '',
        userName: '',
        description: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      const {
        eventName, location, userName, description,
      } = this.formData;
      const payload = {
        user: userName,
        event: {
          eventName,
          location,
          userName,
          description,
        },
      };
      console.error(payload);
      this.formData = {};
    },
  },
};
</script>
