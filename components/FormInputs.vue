<template>
  <v-card>
    <v-form>
      <!-- email input box -->
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <!-- code word input box -->
      <v-text-field v-model="codeWord" label="Code Words" required></v-text-field>
      <!-- male or female toggle -->
      <v-radio-group>
        <v-radio label="Male" value="Male" v-model="gender" />
        <v-radio label="Female" value="Female" v-model="gender" />
      </v-radio-group>
      <br />
      <!-- kids toggle and amount -->
      <v-checkbox v-model="kids" label="Do you have kids?"></v-checkbox>
      <v-text-field :disabled="!kids" v-model="numKids" hide-details single-line type="number" />
      <!-- checkboxes for services needed -->
      <h1>What Assistance Do You Need?</h1>
      <div class="flexRow">
        <v-checkbox v-model="cab" label="Cab" selected-color="blue" class="increaseMargin"></v-checkbox>
        <v-checkbox v-model="lodging" label="Lodging" class="increaseMargin"></v-checkbox>
        <v-checkbox v-model="moving" label="Moving Service"></v-checkbox>
      </div>
      <!-- cross streets input box -->
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
    moving: false,
    crossStreets: "",
    gender: "",
    codeWord: ""
  })
};
</script>

<style scoped>
.flexRow {
  display: flex;
  flex-direction: row;
}
.increaseMargin {
  margin-right: 10px;
}
</style>