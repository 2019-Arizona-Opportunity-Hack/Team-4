<template>
  <v-card>
    <v-form v-model="valid">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <input type="radio" id="male" value="Female" v-model="picked" />
      <label for="Male">Male</label>
      <br />
      <input type="radio" id="female" value="Male" v-model="picked" />
      <label for="Female">Female</label>
      <br />

      <v-checkbox v-model="kids" label="Do you have kids?"></v-checkbox>
      <v-text-field :disabled="!kids" v-model="numKids" hide-details single-line type="number" />

      <div>
        <v-checkbox v-model="cab" label="Cab"></v-checkbox>
        <v-checkbox v-model="lodging" label="Lodging"></v-checkbox>
        <v-checkbox v-model="moving" label="Moving Service"></v-checkbox>
        <br />
      </div>

      <v-text-field v-model="crossStreets" label="Location (Cross Streets)"></v-text-field>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    checkedServices: [],
    kids: false,
    numKids: 0,
    cab: false,
    lodging: false,
    moving: false
  })
};
</script>

<style scoped>
</style>