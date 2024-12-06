<script setup></script>

<template>
  <v-row>
    <v-col xs="12" md="3">
      <slot name="sidebar" />
    </v-col>
    <v-col>
      <slot name="main" />
    </v-col>
  </v-row>
</template>

<style></style>
