<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app location="right" width="300" temporary>
      <!-- Close icon at the top-right corner -->
      <v-btn icon @click="drawer = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <!-- Content inside the drawer -->
      <v-list>
        <v-list-item-group>
          <v-list-item @click="drawer = false">
            <v-list-item-content>
              <h1>Hello</h1>
              <p>How are you?</p>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-btn @click="drawer = true">Open Drawer</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
// const items = ref([{ title: 'Home' }, { title: 'About' }, { title: 'Contact' }])
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
