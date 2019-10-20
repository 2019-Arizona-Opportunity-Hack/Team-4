<template>
  <div>
    <v-card class="flexContainer">
      <v-form v-model="valid">
        <h1>Please Fill Out The Information Form</h1>
        <!-- email input box -->
        <v-text-field v-model="email" :rules="emailRules" label="Please enter your E-mail" required></v-text-field>
        <!-- code word input box -->
        <v-text-field v-model="codeWord" label="Enter Code Words" :rules="blank" required></v-text-field>
        <!-- male or female toggle -->
        <!-- <v-radio-group :rules="buttons" required>
          <v-radio label="Male" value="Male" v-model="gender" />
          <v-radio label="Female" value="Female" v-model="gender" />
          <v-radio label="Other" value="Other" v-model="gender" />
        </v-radio-group>-->
        <v-select
          v-model="select"
          :items="genders"
          :rules="[v => !!v || 'Gender is required']"
          label="Gender"
          required
        ></v-select>
        <!-- kids toggle and amount -->
        <div class="flexRow">
          <v-checkbox v-model="kids" label="Do you have kids?" class="increaseMargin"></v-checkbox>
          <p class="increaseMargin">If so, how many kids?</p>
          <v-text-field :disabled="!kids" v-model="numKids" type="number" />
        </div>

        <div class="flexRow">
          <v-checkbox v-model="pets" label="Do you have pets?" class="increaseMargin"></v-checkbox>
          <p class="increaseMargin">If so, how many pets?</p>
          <v-text-field :disabled="!pets" v-model="numPets" type="number" />
        </div>
        <!-- checkboxes for services needed -->
        <h1>What Assistance Do You Need?</h1>
        <div class="flexRow">
          <v-checkbox v-model="cab" label="Cab" selected-color="blue" class="increaseMargin"></v-checkbox>
          <v-checkbox v-model="lodging" label="Lodging" class="increaseMargin"></v-checkbox>
          <v-checkbox v-model="moving" label="Moving Service"></v-checkbox>
        </div>
        <!-- cross streets input box -->
        <v-text-field :disabled="!cab" v-model="crossStreets" label="Location (Cross Streets)"></v-text-field>
        <v-btn color="blue" class="addBotMargin" :disabled="!valid">Submit</v-btn>
      </v-form>
    </v-card>
  </div>
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
    pets: false,
    numPets: 0,
    cab: false,
    lodging: false,
    moving: false,
    crossStreets: "",
    gender: "",
    codeWord: "",
    blank: [v => !!v || "This field is required"],
    select: null,
    genders: ["Male", "Female", "Other"]
  }),
  methods() {
    function submitForm() {}
  }
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  width: 80%;
  justify-content: center;
  margin-left: 10%;
  margin-top: 3%;
}
.flexRow {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.increaseMargin {
  margin-right: 10px;
}
.addBotMargin {
  margin-bottom: 3%;
}
</style>