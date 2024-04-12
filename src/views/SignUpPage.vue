<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Sign up</h1>
        <v-form>
          <v-text-field label="Email" type="email" variant="underlined" />
          <v-autocomplete
            label="Which browser do you use?"
            :items="browsers"
            variant="underlined"
          ></v-autocomplete>
          <v-file-input label="Attach profile picture" variant="underlined"></v-file-input>

          <v-checkbox label="Agree to terms & conditions" />
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const browsers = ref(['Chrome', 'Firefox', 'Safari', 'Edge', 'Brave'])
</script>

<style lang="scss" scoped></style>
