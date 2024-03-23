import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueFire } from 'vuefire'
import { firebaseApp } from '@/firebase.js'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: []
})
app.use(createPinia())
app.use(router)

app.mount('#app')
