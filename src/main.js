import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/firebase.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { MotionPlugin } from '@vueuse/motion'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false
        // add your light theme colors here
      },
      dark: {
        dark: true,
        colors: {
          background: '#000000'
          // surface: '#FF0000'
        }
        // add your dark theme colors here
      }
    }
  }
})

// Define toggleTheme function
const toggleTheme = () => {
  const currentTheme = vuetify.theme.global.name.value
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  vuetify.theme.global.name.value = newTheme
  console.log(vuetify.theme.global.name.value)
}

const boo = vuetify.theme.global.name.value

provide('boo', boo)

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)

// Provide the toggleTheme function to the entire app
app.provide('toggleTheme', toggleTheme)

app.mount('#app')

AOS.init()
